#!/usr/bin/env node
'use strict'

const toml = require('@iarna/toml')

toml.parse.stream(process.stdin).then(data => process.stdout.write(JSON.stringify(data, null, 2)))
