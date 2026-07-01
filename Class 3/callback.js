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

function prepareOrder(order, callback){
  console.log(`Preparing Order #${order.id}...`);

  setTimeout(() => {
    console.log("Items being prepared.");

    order.items.forEach(item => {
      console.log(`- ${item}`);
    });

    order.status = "Prepared";

    console.log(`Order #${order.id} is ready.`);
    callback(order);
  }, 3000);
}