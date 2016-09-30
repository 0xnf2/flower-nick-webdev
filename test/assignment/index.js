"use strict";

process.env.NODE_ENV = 'test';

const requireDirectory = require('require-directory');

// Start unit tests
it('should run unit tests', () => requireDirectory(module));