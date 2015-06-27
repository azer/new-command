#!/usr/bin/env node
var command = require("./")('publish', 'unpublish', {
  r: 'registry',
  s: 'save'
});

console.log(command);
