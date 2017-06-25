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
		name: "list",
		type: "rawlist",
		message: "Welcome Manager: Choose from the menu:",
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
	}]).then(function (input) {
		switch(input.list) {
			case "View Products for Sale":
                saleProducts();
                break;
            case "View Low Inventory":
                lowInventory();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                addProduct();
                break;
		}
	});
}

funtion saleProducts() {

}

funtion lowInventory() {
	
}

funtion addInventory() {
	
}

funtion addProduct() {
	
}