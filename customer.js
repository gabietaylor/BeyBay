var mysql = require("mysql");
//console.log(mysql);
var inquirer = require("inquirer");
//console.log(inquirer); 

var connection = mysql.createConnection({
	host	 : 'localhost',
	user	 : 'root',
	password : 'Gabie748.',
	database : 'beybay'
});
//console.log(connection);

connection.connect(function(err) {
	if (err) throw err;
	console.log("MySQL server connected with the ID" + connection.threadId)
	//userLogin()
});

