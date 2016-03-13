# obj to json cli

Convert plain JS objects into JSON on the command line. Uses `eval`, so only use it with trusted input.

## install

Adds a `tojson` command.

    $ npm install -g obj-to-json-cli


## example

object.js:
```js
{
  example: 'foo',
  bar: 'baz',
}
```

    $ cat object.js | tojson

    {
        "example": "foo",
          "bar": "baz"
    }


