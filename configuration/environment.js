const yargs = require('yargs/yargs')
const fs = require('fs-extra');
let webBaseUrl = null;
const process = require('process');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

// Web Base Url
const qaUrl = 'https://testing.maxistime.com/apps/auth/login';
const stageUrl = 'Stage URL';
const prodUrl = 'Prod URL';

console.log(`==========================================================================\n`);
console.log(`Removing the Environment config\n`);
fs.removeSync(__dirname + '/environment.json');
console.log(`==========================================================================\n`);

// Generate Environments
function generateEnvironment() {
	argv.env = argv.env;
	switch (argv.env) {
		case 'qa':
			webBaseUrl = qaUrl;
			break;
		case 'stage':
			webBaseUrl = stageUrl;
			break;
		case 'prod':
			webBaseUrl = prodUrl;
			break;
		default:
			webBaseUrl = qaUrl;
	}

    	// Environment Base URL
	let obj = {
		WEB_BASE_URL: webBaseUrl
	};

	fs.writeFile(__dirname + '/environment.json', JSON.stringify(obj, null, 2), function () {
		console.log('Environment config generated Successfully');
	});
}

// Generate Environments
generateEnvironment();
console.log(`==========================================================================\n`);c
console.log(`Environment Generated\n`);
console.log(`==========================================================================\n`);