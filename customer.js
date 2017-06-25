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
    inquirer.prompt([
	    {	
	        type: "confirm",
	        message: "Would you like to buy Beyonce merch?",
	        name: "confirm",
	        default: true
	    }
    ]).then(function(userInput) {
        if (userInput.confirm) {
            //selectProducts();
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
            message: "Choose what you like to buy:",
            name: "choice",
            choices: function() {

                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                    choicesArray.push(results[i].product_name + " " + results[i].price + "$");
                }

                return choiceArray;
            }

        },

        {
            type: "input",
            message: "How many would you like?",
            name: "quantity"
        }

    ]).then(function(answer) {
        var userItem;
        for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.Choice) {
                userItem = results[i];
            }
        }
        if (results.stock_quantity < parseInt(answer.quantity)) {
            connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: answer.quantity
                }, {
                    id: userItem.id
                }],
                function(error) {
                    if (error) throw err;
                    console.log('Yes! Now you can slay!');
                    userLogin();
                }
            );
        } else {
            console.log("Sorry come back later and we'll get you right...");
            userLogin();
        }
    });
});
}