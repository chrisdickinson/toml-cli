#!/usr/bin/env node
'use strict'

const concat = require('concat-stream')
const toml = require('@iarna/toml')

process.stdin.pipe(concat(buf => {
  process.stdout.write(JSON.stringify(toml.parse(String(buf)), null, 2))
}))
