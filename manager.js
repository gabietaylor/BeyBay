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
    }]).then(function(input) {
        switch (input.list) {
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

// View Sale Products Complete
function saleProducts() {
    console.log("View Sale Products");
    connection.query("SELECT * FROM `products`", function(queryError, response) {
        if (queryError)
            throw queryError;
        response.forEach(function(row) {
            console.log("id = ", "'", row.id, "'",
                "Product Name = ", "'", row.product_name, "'",
                "Price ", "'", row.price, "'",
                "Quantity ", "'", row.stock_quantity, "'")
        });
    })
}

// View Low Inventory Complete
function lowInventory() {
    connection.query("SELECT `product_name`, `stock_quantity` FROM `products` WHERE `stock_quantity`< 20 ORDER BY `stock_quantity` DESC;", function(err, results) {
        if (err)
            throw err;
        console.log(results)
    });
}

// Add to Products Inventory
function addInventory() {
    console.log("Add to Current Products Inventory");
    connection.query("SELECT * FROM `products`", function(err, results) {
        if (err)
            throw err;
        inquirer.prompt([{
            type: 'list',
            name: "addProduct",
            message: "Add more of any product that is currently in the store",
            choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                    choiceArray.push(results[i].product_name + " " + "$ " + results[i].price);
                }
                return choiceArray;
            }
        }]).then(function(answer) {
            results.stock_quantity++;
            // results coming up undefined
            console.log("you added another " + results.product_name);
        })
    });
}

// Add Products Complete
function addProduct() {
    console.log("Follow each prompt to add a new product:");
    // need to put a switch in if mgr says no
    inquirer.prompt([{
        type: "confirm",
        name: "question",
        message: "Add a new product?"
    }, {
        type: "input",
        name: "item_id",
        message: "Items Id:"
    }, {
        type: "input",
        name: "product_name",
        message: "Product Name:"
    }, {
        type: "input",
        name: "department_name",
        message: "Department Name:"
    }, {
        type: "input",
        name: "price",
        message: "Price:"
    }, {
        type: "input",
        name: "stock_quantity",
        message: "Stock Quantity:"
    }, {
        type: "input",
        name: "autographed",
        message: "Is it autographed? (0/1)"
    }]).then(function(product) {
        var item_id = product.item_id;
        var product_name = product.product_name;
        var department_name = product.department_name;
        var price = product.price;
        var stock_quantity = product.stock_quantity;
        var autographed = product.autographed;

        connection.query("INSERT INTO `products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`, `autographed`) VALUES (?, ?, ?, ?, ?, ?)", [item_id, product_name, department_name, price, stock_quantity, autographed], function(err, data) {
            if (err) {
                throw err
            }
            console.log("Your product " + product_name + " has been added!")
        });
    });
}