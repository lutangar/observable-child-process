const { Observable } = require('rxjs/Observable');
const childProcess = require('child_process');
const readline = require('readline');
const chalk = require('chalk');

const spawn = (command, args = [], options = {}) => Observable.create((observer) => {
    const spawnee = childProcess.spawn(command, args, options);
    console.log(chalk`{white.bold ${command} ${args.join(' ')}}`);

    readline
        .createInterface({ input: spawnee.stdout, terminal: false })
        .on('line', line => observer.next(line))
    ;

    readline
        .createInterface({ input: spawnee.stderr, terminal: false })
        .on('line', line => console.error(chalk`{red ${line}}`))
    ;

    spawnee.on('close', (code) => {
        if (code === 0) {
            observer.complete();
        } else {
            observer.error(new Error(`child process exited with code ${code}`));
        }
    });
});

module.exports = {
    spawn,
};
