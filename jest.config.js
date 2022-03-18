// const {defaults} = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/out/'],
  setupFilesAfterEnv: ['@relmify/jest-fp-ts'],
};
