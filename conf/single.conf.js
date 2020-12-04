const build = 'x' + new Date();
const capabilities = [
  {
    "platform": "Windows 10",
    "browserName": "Chrome",
    "version": "80.0",
  },
  {
    "platform": "Windows 10",
    "browserName": "Chrome",
    "version": "81.0",
  },
  {
    "platform": "Windows 10",
    "browserName": "Chrome",
    "version": "83.0",
  },
  {
    "platform": "Windows 10",
    "browserName": "Internet Explorer",
    "version": "11.0",
    "ie.compatibility": 11001
  },
  {
    "platform": "Windows 10",
    "browserName": "MicrosoftEdge",
    "version": "18.0"
  },
  {
    "platform": "Windows 10",
    "browserName": "Firefox",
    "version": "75.0"

  },
  {
    "platform": "Windows 10",
    "browserName": "Firefox",
    "version": "76.0"
  },
  {
    "platform": "MacOS Big sur",
    "browserName": "Safari",
    "version": "14.0",
  }
];

exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: true,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  specs: ["./tests/specs/single_test.js"],
  exclude: [],

  capabilities: capabilities.map((capability) => {
    return {
      ...capability,
      build,
      network: false,
      video: true,
      visual: false,
      console: false
    }
  }),
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  maxInstances: 5,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "jasmine",
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
};
