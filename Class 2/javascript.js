console.log("Hello, World!");

let a = 5;

let b = 10;

function sayHello(){
  console.log("Hello");
}

sayHello();

console.log(a + b);

let num1 = 5;
let num2 = 6;
let num3 = 7;

function addNumbers(x, y, z){
  return x + y + z;
}

let result = addNumbers(num1, num2, num3);
console.log(result);

console.log("Aryan is " + 20 + " years old.");


function outer(){
  function inner(){
    console.log("This is the inner function.");
  }

  console.log("This is the outer function.");
  outer.inner = inner;
}

outer();

outer.inner();