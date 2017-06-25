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
    menu()
});

function menu() {
    inquirer.prompt([{
        name: "menu",
        type: "rawlist",
        message: "Please choose from one of the following options",
        choices: ["View Product Sales by Department", "Create New Department"]
    }]).then(function(input) {
        switch (input.menu) {
            case "View Products Sales by Department":
                salesDept();
                break;
            case "Create New Department":
                newDept();
                break;
            default:
                console.log("Please choose what you want to do!")
        }
    });
}

// Sales Dept
function salesDept() {

}

// New Dept
function newDept() {

}