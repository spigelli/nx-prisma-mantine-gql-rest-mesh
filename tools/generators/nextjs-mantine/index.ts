import {
  convertNxGenerator,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  joinPathFragments,
  names,
  offsetFromRoot,
  readProjectConfiguration,
  Tree,
  updateProjectConfiguration,
} from '@nrwl/devkit';
import { libraryGenerator as workspaceLibraryGenerator } from '@nrwl/workspace/generators';
import { join } from 'path';

export interface OriginalSchema {
  name: string;
  directory?: string;
  simpleModuleName?: boolean;
  skipTsConfig?: boolean;
  skipFormat?: boolean;
  tags?: string;
  unitTestRunner?: 'jest' | 'none';
  // linter?: Linter;
  buildable?: boolean;
  publishable?: boolean;
  importPath?: string;
  testEnvironment?: 'jsdom' | 'node';
  rootDir?: string;
  babelJest?: boolean;
  js?: boolean;
  pascalCaseFiles?: boolean;
  strict?: boolean;
  standaloneConfig?: boolean;
  setParserOptionsProject?: boolean;
  compiler: 'tsc' | 'swc';
}

const optionsOverride = {
  compiler: 'tsc',
  skipTsConfig: true,
  skipFormat: true,
  unitTestRunner: 'jest',
  linter: 'eslint',
  testEnvironment: 'node',
  babelJest: false,
  js: false,
  strict: true,
  standaloneConfig: false,
  setParserOptionsProject: false,
}

export interface Schema {
  name: string;
  directory?: string;
  simpleModuleName?: boolean;
  tags?: string;
  publishable?: boolean;
  importPath?: string;
  rootDir?: string;
  pascalCaseFiles?: boolean;
}

export interface NormalizedSchema extends OriginalSchema {
  name: string;
  prefix: string;
  fileName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
  compiler: 'tsc';
}

async function nextjsMantineGenerator(tree: Tree, schema: any) {
  const options = normalizeOptions(tree, schema);
  const newOptions: NormalizedSchema = Object.assign(options, optionsOverride) as NormalizedSchema;

  if (newOptions.publishable === true && !schema.importPath) {
    throw new Error(
      `For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)`
    );
  }

  const libraryInstall = await workspaceLibraryGenerator(tree, {
    ...schema,
    importPath: newOptions.importPath,
    testEnvironment: 'node',
    skipFormat: true,
    compiler: 'tsc',
    skipTsConfig: true,
    unitTestRunner: 'jest',
    linter: 'eslint',
    babelJest: false,
    js: false,
    strict: true,
    standaloneConfig: true,
    setParserOptionsProject: true,
  });
  createFiles(tree, newOptions);
  updateProject(tree, options);

  if (!schema.skipFormat) {
    await formatFiles(tree);
  }

  return libraryInstall;
}

export default nextjsMantineGenerator;
export const librarySchematic = convertNxGenerator(nextjsMantineGenerator);

function normalizeOptions(tree: Tree, options: Schema): NormalizedSchema {
  const { npmScope, libsDir } = getWorkspaceLayout(tree);
  const defaultPrefix = npmScope;
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;

  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const fileName = getCaseAwareFileName({
    fileName: options.simpleModuleName ? name : projectName,
    pascalCaseFiles: options.pascalCaseFiles,
  });
  const projectRoot = joinPathFragments(libsDir, projectDirectory);

  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  const importPath =
    options.importPath || `@${defaultPrefix}/${projectDirectory}`;

  return {
    ...options,
    prefix: defaultPrefix, // we could also allow customizing this
    fileName,
    name: projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
    importPath,
    compiler: 'tsc'
  };
}

function getCaseAwareFileName(options: {
  pascalCaseFiles: boolean;
  fileName: string;
}) {
  const normalized = names(options.fileName);

  return options.pascalCaseFiles ? normalized.className : normalized.fileName;
}

function createFiles(tree: Tree, options: NormalizedSchema) {
  const { className, name, propertyName } = names(options.fileName);

  generateFiles(tree, join(__dirname, './files/lib'), options.projectRoot, {
    ...options,
    className,
    name,
    propertyName,
    tmpl: '',
    offsetFromRoot: offsetFromRoot(options.projectRoot),
  });
}

function updateProject(tree: Tree, options: NormalizedSchema) {
  if (!options.publishable && !options.buildable) {
    return;
  }
  const project = readProjectConfiguration(
    tree,
    options.name
  );
  const {libsDir} = getWorkspaceLayout(tree);
  project.targets = project.targets || {};
  project.targets.build = {
    executor: `@nrwl/js:${options.compiler}`,
    outputs: ['{options.outputPath}'],
    options: {
      outputPath: `dist/${libsDir}/${options.projectDirectory}`,
      tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
      packageJson: `${options.projectRoot}/package.json`,
      main: `${options.projectRoot}/src/index` + (options.js
        ? '.js'
        : '.ts'),
      assets: [`${options.projectRoot}/*.md`],
    },
  };
  if (options.rootDir) {
    project.targets.build.options.srcRootForCompilationRoot = options.rootDir;
  }
  updateProjectConfiguration(tree, options.name, project);
}
