var mysql = require('mysql');
//var config = require('../config.js')
console.log('host: ', process.env.DATABASE_HOST);
console.log('user: ', process.env.DATABASE_USER);
console.log('pw: ', process.env.DATABASE_PW);
console.log('db: ', process.env.DATABASE_NAME);
var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || '127.0.0.1',
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PW, //|| config.pw,
  database: process.env.DATABASE_NAME || 'git_jobs'
});

connection.connect(err => {
  if (err) {
    console.log('Error connecting to git_jobs: ', err);
  } else {
      console.log('Connected to gitjobs!');
  }
});

module.exports = connection;

