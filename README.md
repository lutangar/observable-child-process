# observable-child-process
Spawn observable child processes.

## Usage
For example to build and push a docker image:
```
const { spawn } = require('observable-child-process');

spawn('docker', ['build', '-t', 'myimage'], { env: { ...process.env, MY_CUSTOM_ENV_VARIABLE: 'foo' })
.concat(spawn('docker', ['push', 'myimage']));
```

## Resources
* https://nodejs.org/api/child_process.html
* http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html

## Licence
MIT