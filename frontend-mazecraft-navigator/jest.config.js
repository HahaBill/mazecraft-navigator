module.exports = {
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js'
    },
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    testEnvironment: 'jsdom',
  };
  