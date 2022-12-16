const path = require('path');

module.exports = {
  entry: {
    auth: './src/auth.js',
    collection: './src/collection.js',
    creators: './src/creators.js',
    like: './src/like.js',
    login: './src/login.js',
    nft: './src/nft.js',
    register: './src/register.js',
    username: './src/username.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  watch: true
}