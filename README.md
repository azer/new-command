## new-command

Simplifies defining commands by combining [minimist](http://github.com/substack/minimist), [show-help](http://github.com/azer/show-help), [show-version](http://github.com/azer/show-version) modules.

Usage Examples: [prova](https://github.com/azer/prova/blob/master/bin/prova#L3), [bud](https://github.com/azer/bud/blob/master/lib/cli.js#L9), [personal-api](https://github.com/azer/personal-api/blob/master/bin/personal-api.js#L3), [ourtunes](https://github.com/azer/ourtunes/blob/master/bin/ourtunes.js#L5)

## Install

```bash
$ npm install new-command
```

## Usage

Define a command and options by calling new-command:

```js
command = require('new-command')({ p: 'port', n: 'hostname' })
http = require('http')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(command.port || 1337, command.hostname || 'localhost');
```

`new-command` will take care of `--version` (-v) and `--help` (-h) options
for you, by calling [show-version](http://github.com/azer/show-version) and [show-help](http://github.com/azer/show-help). So, if you call this command with -v parameter:

```bash
$ start-server --version

start-server v0.0.0

```

It reads your package name and version and outputs automatically. When user calls -h parameter:

```bash
$ start-server --help
```

It'll look for following paths in the project directory and will output the one it finds first:

* docs/man
* bin/help.txt
* bin/usage.txt
* help.txt
* usage.txt
* README
* README.md
* README.markdown
