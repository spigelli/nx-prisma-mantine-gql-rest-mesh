export const environmentVariables = {
  docker: {
    POSTGRES_USER: 'user',
    POSTGRES_PASSWORD: 'password',
    POSTGRES_DB: 'initial_db',
  },
  nextAuth: {
    /**
     * NextAuth configuration
     */
    EMAIL_SERVER: null,
    EMAIL_FROM: null,
    /**
     * Gmail Provider
     */
    GOOGLE_ID: null,
    GOOGLE_SECRET: null,
    /**
     * JWT Secret
     */
    SECRET: null,
    /**
     * When deploying to production, set the NEXTAUTH_URL
     * environment variable to the canonical URL of your
     * site
     */
    NEXTAUTH_URL: null,
    /**
     * Used to encrypt the NextAuth.js JWT, and to hash email
     * verification tokens. This is the default value for
     * the secret option. The secret option might be removed
     * in the future in favor of this. If you are using
     * Middleware this environment variable must be set.
     */
    NEXTAUTH_SECRET: null,
    /**
     * If provided, server-side calls will use this instead of
     * NEXTAUTH_URL. Useful in environments when the server
     * doesn't have access to the canonical URL of your
     * site. Defaults to NEXTAUTH_URL.
     */
    NEXTAUTH_URL_INTERNAL: null,
  }
}
//   server: process.env.EMAIL_SERVER,
//   from: process.env.EMAIL_FROM,
