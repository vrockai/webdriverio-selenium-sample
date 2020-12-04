const build = 'x' + new Date();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [
    ['browserstack', {
      browserstackLocal: true
    }]
  ],
  specs: ["./tests/specs/single_test.js"],
  exclude: [],
  capabilities: [
    {
      build,
      base: 'BrowserStack',
      'browserstack.local': true,
      browserName: 'chrome',
      browserVersion: '80.0',
      os: 'Windows',
      os_version: '10',
      browser: 'chrome',
      device: null,
      browser_version: '80.0',
      real_mobile: null,
      "platform" : "Windows 10",
      'goog:chromeOptions': {
        prefs: {
          'profile.managed_default_content_settings.notifications': 1,
        },
      },
    }
  ],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
};
