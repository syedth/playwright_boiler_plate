// runner.js
const {spawn} = require('child_process');
const exec = require('child_process').exec;

// Get command-line arguments starting from the third argument (first two are node and script path)
const args = process.argv.slice(2);

// Print the arguments provided in the terminal
console.dir(args);

// Extract the config file argument if provided
const configArg = args.find(arg => arg.startsWith('--config='));

// If a config file is provided, use it; otherwise, default to 'playwright.config.js or playwright.config.ts'
const configFile = configArg ? configArg.split('=')[1] : 'playwright.config.ts';

// Construct the command arguments for Playwright test runner
const commandArgs = ['test', `--config=${configFile}`, ...args];

const testProcess = spawn('npx', ['playwright', ...commandArgs], {
    stdio: 'inherit',
    shell: true
});

// Handle process completion
testProcess.on('close', (code) => {
    if (code !== 0) {
        console.error(`Playwright tests failed with code ${code}`);
    } else {
        console.log('All Playwright tests passed successfully!');
    }
});

// ==
// For Execution with environment generation in single run
// exec('node configuration/environment.js',
//     (error, execution) => {
//         console.log(execution);
//         console.log(`Initiating Test Run\n`);
//         // Run Playwright Test CLI and inherit the terminal environment
//         const testProcess = spawn('npx', ['playwright', ...commandArgs], {
//             stdio: 'inherit',
//             shell: true
//         });
//         // Handle process completion
//         testProcess.on('close', (code) => {
//             if (code !== 0) {
//                 console.error(`Playwright tests failed with code ${code}`);
//             } else {
//                 console.log('All Playwright tests passed successfully!');
//             }
//         });
//         if (error !== null) {
//             console.log(`exec error: ${error}`);
//         }
//     });
// ==
