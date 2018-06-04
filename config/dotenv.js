module.exports = function(env) {
  return {
    clientAllowedKeys: ['BLIPPAR_CLIENT_ID'],
    clientAllowedKeys: ['BLIPPAR_CLIENT_SECRET'],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};
