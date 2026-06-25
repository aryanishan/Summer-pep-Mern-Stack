// console.log("Hello, World!");

// let a = 5;

// let b = 10;

// function sayHello(){
//   console.log("Hello");
// }

// sayHello();

// console.log(a + b);

// let num1 = 5;
// let num2 = 6;
// let num3 = 7;

// function addNumbers(x, y, z){
//   return x + y + z;
// }

// let result = addNumbers(num1, num2, num3);
// console.log(result);

// console.log("Aryan is " + 20 + " years old.");


// function outer(){
//   function inner(){
//     console.log("This is the inner function.");
//   }

//   console.log("This is the outer function.");
//   outer.inner = inner;
// }

// outer();

// outer.inner();

function createBankAccount(InitailBalance){
  return {
    deposit(amount){
      InitailBalance += amount;
      console.log(`Depositing ${amount} and now balance is ${InitailBalance}`);
    },

    withdraw(amount){
      if(amount > InitailBalance){
        console.log(`Insufficient funds to withdraw ${amount}, You can't withdraw more than ${InitailBalance}`);
      }
      else{
        InitailBalance -= amount;
        console.log(`Withdrawing ${amount} and now balance is ${InitailBalance}`);
      }
    },

    getBalance(){
      console.log(`Your current balance is ${InitailBalance}`);
    }
  }
}

let account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.getBalance();
account.withdraw(1500);
account.getBalance();
account.deposit(2000);
account.getBalance();
account.withdraw(3000);
account.getBalance();