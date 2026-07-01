function one (callback){
  console.log("One");
  callback();

}

function two (callback){
  console.log("Two");
  callback();

}

function three (callback){
  console.log("Three");
  callback();

}

function four(callback){
  console.log("Four");
  callback();

}

function five(callback){
  console.log("Five");
  callback();

}

function six(callback){
  console.log("Six");
  callback();

}

function seven(callback){
  console.log("Seven");
  callback();

}

function eight(callback){
  console.log("Eight");
  callback();

}

function nine(callback){
  console.log("Nine");
  callback();

}

function ten(callback){
  console.log("Ten");
  callback();

}

one(() => {
  two(() => {
    three(() => {
      four(() => {
        five(() => {
          six(() => {
            seven(() => {
              eight(() => {
                nine(() => {
                  ten(() => {
                    console.log("All done executing");
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});