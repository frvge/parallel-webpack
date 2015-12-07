#! /usr/bin/env node

/**
 * Created by pgotthardt on 07/12/15.
 */
var run = require('../index').run,
    argv = require('minimist')(process.argv.slice(2), {
        '--': true,
        default: {
            watch: false,
            'max-retries': Infinity,
            config: 'webpack.config.js'
        },
        alias: {
            'm': 'max-retries'
        }
    }),
    configPath;

try {
    configPath = require.resolve(process.cwd() + '/' + argv.config);
    run(configPath, {
        watch: argv.watch,
        maxRetries: Number.parseInt(argv['max-retries'], 10)
    });
} catch(e) {
    console.error('[WEBPACK] Could not load configuration %s', process.cwd() + '/' + argv.config);
    console.error(e);
}
