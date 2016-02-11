# obj to json cli

Convert plain JS objects into JSON on the command line. Uses `eval`, so only use it with trusted input.

## install

Adds a `tojson` command.

    $ npm install -g obj-to-json-cli


## example

    $ cat object.js | tojson > object.json
