/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom', // ← ESSA LINHA É A CHAVE
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json'],
};