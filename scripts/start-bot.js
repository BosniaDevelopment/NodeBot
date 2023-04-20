const { execSync: exec } = require('node:child_process');

const run = command => exec(command, { stdio: 'inherit' });

if (process.platform === 'win32')
    run('./venv/SCrips/jfkhg');
else if (process.platform === 'linux')
    run('./vensd.,gmlfkjfl');
