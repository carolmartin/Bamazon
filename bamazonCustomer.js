var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
var chosenItem;


function start() {
  // query the database for all items being auctioned
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    //Display the available items from the prodcut table
    console.log(results);
    // once you have the items, prompt the user for which they'd like to buy     
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function () {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What product would you like to buy?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function (answer) {
        // get the information of the chosen item

        // function to check if product is available or not

        console.log("answer: " + answer);
        // var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
            console.log("In checkIfAvailable chosenItem: " + chosenItem);
          }
        }

        // determine quantity available is more than requested
        console.log(chosenItem);
        if (chosenItem.stock_quantity >= parseInt(answer.quantity)) {
          // Decrease stock_quantity in db by amount requested, let the user know, and start over
          var updatedQuantity = chosenItem.stock_quantity - parseInt(answer.quantity);
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: updatedQuantity
              },
              {
                item_id: chosenItem.item_id
              }
            ],
            function (error) {
              if (error) throw err;
              console.log("Purchase completed and updated quantity!");
              start();
            }
          );
        }
        else {
          // Quantity requested not availble, so apologize and start over
          console.log("Sorry, quanity not available. Try again...");
          start();
        }

      });

  });
}

