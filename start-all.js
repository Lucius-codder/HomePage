const { spawn } = require('child_process');

// Start the main app
const mainAppProcess = spawn('npm', ['run', 'serve'], { cwd: 'BookKeeping', shell: true });

// Start the sub app
const subAppProcess = spawn('npm', ['run', 'serve'], { cwd: 'Portal', shell: true });

// Handle the exit event for the main app
mainAppProcess.stdout.on('data', (data) => {
  console.log('mainAppProcess: ', data.toString());
});

mainAppProcess.stderr.on('data', (data) => {
  console.error('mainAppProcess error:', data.toString());
});

subAppProcess.stdout.on('data', (data) => {
  console.log('subAppProcess: ', data.toString());
});

subAppProcess.stderr.on('data', (data) => {
  console.error('subAppProcess error:', data.toString());
});




