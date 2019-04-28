////////// Requires & Global Variables ////////////////////
var mysql = require("mysql");
var inquirer = require("inquirer");
var itemstock;
var itemwant;
var newstock;
var total;
// Create the connection information for the SQL database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "Pikapee889900seven",
  // Database to be used  
  database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
   start();
});

function start() {
  // query the database for all items avaliable
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log(" \n---------- Inventory ---------- \n");
    for (var i = 0; i < results.length; i++) {
        console.log(results[i].item_id + "   " + results[i].price + "  " + results[i].product_name);
    };
    console.log(" \n");
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What would you like to buy?"
        },
        {
          name: "quantity",
          type: "number",
          message: "How many would you like?",
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }
        itemstock = chosenItem.stock_quantity;
        itemwant = answer.quantity;
        newstock = itemstock - itemwant;
        total = (itemwant) * chosenItem.price;


        // determine if bid was high enough
        if ( itemstock > itemwant ) {
          // there was enough stock, so update the db, let the user know, and start over
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newstock
              },
              {
                item_id: chosenItem.item_id
              }
            ],
            function(err) {
              if (err) throw err;
              console.log("Congrats! you just bought a " + chosenItem.product_name + " for a total of " + total);
              setTimeout(function(){ start(); }, 5000);
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("There was not enough stock to make the purchase :/");
          setTimeout(function(){ start(); }, 5000);
        }
      });
  });
}