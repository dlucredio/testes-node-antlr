#!/usr/bin/env node

import principal from '../src/main.js';

const args = process.argv.slice(2);

principal(args);