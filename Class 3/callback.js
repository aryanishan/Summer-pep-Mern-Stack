// function greet(name, callback){
//   console.log("Hello, " + name + "!");
//   callback();
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Aryan", sayBye);

function placeOrder(customerName, callback){
  console.log(`${customerName} is placing an order...`);

  setTimeout(() => {
    const order = {
      id: 101, 
      customer: customerName,
      items: ["Burger", "Pizza" ,"Cold Drink"]
    };

    console.log(`Order #${order.id} placed successfully.`);
    callback(order);
  }, 2000);
}