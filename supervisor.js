function mainSupervisor() {

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
            message: "Welcome Supervisor: Choose from the menu:",
            choices: ["View Product Sales by Department", "Create New Department"]
        }]).then(function(input) {
            switch (input.list) {
                case "View Products Sales by Department":
                    salesDept();
                    break;
                case "Create New Department":
                    addDept();
                    break;
            }
        });
    }

    // Sales Dept
    function salesDept() {
        console.log("View Product Sales by Department");
        // not pulling up table
        connection.query("SELECT * FROM `departments`", function(queryError, response) {
            if (queryError)
                throw queryError;
            response.forEach(function(row) {
                console.log("id = ", "'", row.id, "'",
                    "Department Id = ", "'", row.department_id, "'",
                    "Department Name = ", "'", row.department_name, "'",
                    "Overhead Costs", "'", row.over_head_costs, "'",
                    "Product Sales", "'", row.product_sales, "'",
                    "Total Profit", "'", row.total_profits, "'")
            });
        })
    }

    // New Dept Complete
    function addDept() {
        console.log("Follow each prompt to add a new department:");
        // need to put a switch in if supe says no
        inquirer.prompt([{
            type: "confirm",
            name: "question",
            message: "Add a new department?"
        }, {
            type: "input",
            name: "id",
            message: "ID:"
        }, {
            type: "input",
            name: "department_id",
            message: "Department ID:"
        }, {
            type: "input",
            name: "department_name",
            message: "Department Name:"
        }, {
            type: "input",
            name: "over_head_costs",
            message: "Over Head Costs:"
        }, {
            type: "input",
            name: "product_sales",
            message: "Product Sales:"
        }, {
            type: "input",
            name: "total_profits",
            message: "Total Profits:"
        }]).then(function(departments) {
            var id = departments.id;
            var department_id = departments.department_id;
            var department_name = departments.department_name;
            var over_head_costs = departments.over_head_costs;
            var product_sales = departments.product_sales;
            var total_profits = departments.total_profits;

            connection.query("INSERT INTO `departments` (`id`, `department_id`, `department_name`, `over_head_costs`, `product_sales`, `total_profits`) VALUES (?, ?, ?, ?, ?, ?)", [id, department_id, department_name, over_head_costs, product_sales, total_profits], function(err, data) {
                if (err) {
                    throw err
                }
                console.log("Your department " + department_name + " has been added!")
            })
        });
    }
};
mainSupervisor();

module.exports = mainSupervisor;