// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync: exec } = require('node:child_process');

const run = (command) => exec(command, { stdio: 'inherit' });

if (process.platform === 'win32')
	run('venv\\Scripts\\activate.bat && python -m bot');
else if (process.platform === 'linux' || process.platform === 'darwin')
	run('source ./venv/bin/activate && python3 -m bot');
