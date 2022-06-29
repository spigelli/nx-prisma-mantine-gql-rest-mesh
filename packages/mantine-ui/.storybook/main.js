module.exports = {
  stories: [
    '../src/components/**/*.story.mdx',
    '../src/components/**/*.story.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@nrwl/react/plugins/storybook',
    'storybook-dark-mode',
    {
      name: 'storybook-addon-turbo-build',
      options: { optimizationLevel: 2 },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: "webpack5",
  },
};
