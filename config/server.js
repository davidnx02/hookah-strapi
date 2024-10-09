module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '536d78b85c5213a6e9029a809bdd23a942d6fe4216610088c28c93f41ab54810'),
    },
  },
  app: {
    // Ensure that app keys are properly set, with a fallback if env var is missing
    keys: env.array('APP_KEYS', ['myKeyA', 'myKeyB']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
