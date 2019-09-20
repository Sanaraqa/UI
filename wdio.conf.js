exports.config = {
    runner: 'local',
    specs: ['./tests/*.js'],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://nutra.media',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: [['allure', {outputDir: 'allure-results'}]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: function(test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    },
};