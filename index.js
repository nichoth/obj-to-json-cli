#!/usr/bin/env node
var concat = require('concat-stream');

var onBuffered = concat({encoding: 'string'}, function(code) {
  var c = eval('('+code+')');
  console.log( JSON.stringify(c, null, 2) );
});

process.stdin.pipe(onBuffered);
