function mainCustomer() {

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
        userLogin()
    });

    function userLogin() {
        inquirer.prompt([{
            type: "confirm",
            message: "Would you like to buy Beyonce merch?",
            name: "confirm",
            default: true
        }]).then(function(userInputs) {
            if (userInputs.confirm) {
                selectMerch();
            } else {
                console.log("Leaving the BeyHive")
            }
        });
    }

    function selectMerch() {
        connection.query("SELECT * FROM `products`", function(err, results) {
            if (err) throw err;
            inquirer.prompt([{
                type: "rawlist",
                message: "Choose what you would like to slay in:",
                name: "choice",
                choices: function() {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].product_name + " " + results[i].price + "$");
                        }
                        return choiceArray;
                    }
                    // keep pushing not in stock even when in stock
            }, {
                type: "input",
                message: "How many would you like?",
                name: "quantity"
            }]).then(function(userInput) {
                var userItem;
                for (var i = 0; i < results.length; i++) {
                    if (results[i].product_name === userInput.choice) {
                        userItem = results[i];
                    }
                }
                if (results.stock_quantity < parseInt(userInput.quantity)) {
                    connection.query("UPDATE products SET ? WHERE ?", [{
                            stock_quantity: userInput.quantity
                        }, {
                            id: userItem.id
                        }],
                        function(error) {
                            if (error) throw err;
                            console.log("Yes! Now you can slay!");
                            userLogin();
                        }
                    );
                } else {
                    console.log("Sorry we are out of stock but choose another item!");
                    userLogin();
                }
            });
        });
    }
};
mainCustomer();

module.exports = mainCustomer;