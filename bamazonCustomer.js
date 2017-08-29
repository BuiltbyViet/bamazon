var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  

  start();
  
});

function start() {
  inquirer
    .prompt({
      name: "listOrBuy",
      type: "list",
      message: "Would you like to see the Bamazon [LIST] first or immediately start to [BUY] if you know the ID?",
      choices: ["LIST", "BUY"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.listOrBuy.toUpperCase() === "LIST") {
        readProducts();
      }
      else {
        buy();
      }
    });
}



function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    buy();
    
  });

}

function buy() {
inquirer
.prompt([
{
	name: "productID",
	message: "What is ID of the product that you would like to buy?"

},
{
	name: "number",
	message:"How many would you like to purchase?"


}



])

.then(function(user) {
	connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    if (user.productID!==res[user.productID-1]){
    	console.log("ITEM ID NOT FOUND.")
    }
	
 if (user.number>res[user.productID-1].stock_quantity)
 	{
 		console.log("INSUFFICIENT QUANTITY! ORDER NOT PROCESSED");
 		connection.end();
		
}

else {
 var query = connection.query(
 	"UPDATE products SET ? WHERE ?",
 	[
 	{
 		stock_quantity:res[user.productID-1].stock_quantity-user.number
 	},
 	{
 		item_id: user.productID
 	}
 	]);
 console.log("Thank you for your purchase! Your total cost is: " + res[user.productID-1].price*user.number + " dollars");
 connection.end();
}

})
 
})


};


















