const express = require('express');

var http = require('http');
const app = express();

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3036); 

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'food',
 'root',
 'anjali',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
