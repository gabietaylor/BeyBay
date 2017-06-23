var mysql = require("mysql");
//console.log(mysql);
var inquirer = require("inquirer");
//console.log(inquirer); 

var connection = mysql.createConnection({
	host	 : 'localhost',
	user	 : 'root',
	password : '',
	database : 'beybay'
});
//console.log(connection);