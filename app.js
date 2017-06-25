var mysql = require("mysql");
//console.log(mysql);
var inquirer = require("inquirer");
//console.log(inquirer); 

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gabie748.',
    database: 'beybay'
});
//console.log(connection);

connection.connect(function(err) {
    if (err) throw err;
    //console.log("MySQL server connected with the ID" + connection.threadId)
    mainMenu()
});

function mainMenu() {
    inquirer.prompt([{
        name: "list",
        type: "rawlist",
        message: "Welcome to BeyBay: the One Stop Shop for all you slaying needs!! Are you a:",
        choices: ["Customer", "Manager", "Supervisor"]
    }]).then(function(input) {
        switch (input.list) {
            case "Customer":
                customer();
                break;
            case "Manager":
                manager();
                break;
            case "Supervisor":
                supervisor();
                break;
        }
    });
}

/*function customer() {

}

function manager() {

}

function supervisor() {

}*/