exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 600000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome',
    acceptSslCerts: 'true',
  },
  SELENIUM_PROMISE_MANAGER: false,
  // Spec patterns are relative to this directory.
  specs: [
    '../feature_files/*.feature'
  ],

  params: {
    baseUrl: '',
    downloadedPdf: '',
  },

  onPrepare: function () {
    //browser.ignoreSynchronization = true;`
    browser.waitForAngularEnabled(false);
    if (!process.env.SITE_URL) {
      browser.params.baseUrl = 'https://www.commbank.com.au/';
      // browser.params.baseUrl = 'http://localhost:3000';
    } else {  
      browser.params.baseUrl = process.env.SITE_URL;
    }
  },

  cucumberOpts: {
    require: ['../step_definitions/*.js'],
    tags: ['@TEST'],
    format: 'json:reports/TestResults.json',
    profile: false,
    'no-source': true
  },

  ignoreUncaughtExceptions: true
};