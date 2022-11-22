// Instructions
// Analyze the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
      a = 3;
    }
    alert("inside the funcOne function ", a);
  }
  // #1.1 - run in the console:
  funcOne();
  // #1.2 What will happen if the variable is declared
  // with const instead of let ?
  // ------------- COMMENT start --------------------------------- //
  // it will be a mistake, because 'const' isn't reassignable
  // ------------- COMMENT end ----------------------------------- //
  
  //#2
  {
    let a = 0;
    function funcTwo() {
      a = 5;
    }
  
    function funcThree() {
      alert("inside the funcThree function ", a);
    }
  
    // #2.1 - run in the console:
    funcThree();
    funcTwo();
    funcThree();
  }
  // #2.2 What will happen if the variable is declared
  // with const instead of let ?
  // ------------- COMMENT start --------------------------------- //
  // 0
  // it will be a mistake, because 'const' isn't reassignable
  // ------------- COMMENT end ----------------------------------- //
  
  //#3
  function funcFour() {
    window.a = "hello";
  }
  
  function funcFive() {
    alert("inside the funcFive function ", a);
  }
  
  // #3.1 - run in the console:
  funcFour();
  funcFive();
  
  //#4
  {
    let a = 1;
    function funcSix() {
      let a = "test";
      alert("inside the funcSix function ", a);
    }
  }
  // #4.1 - run in the console:
  funcSix();
  // #4.2 What will happen if the variable is declared
  // with const instead of let ?
  // ------------- COMMENT start --------------------------------- //
  // it also will be 'test' because of scope declaration
  // ------------- COMMENT end ----------------------------------- //
  
  //#5
  let a = 2;
  if (true) {
    let a = 5;
    alert("in the if block ", a);
  }
  alert("outside of the if block ", a);
  
  // #5.1 - run the code in the console
  // #5.2 What will happen if the variable is declared
  // with const instead of let ?
  // ------------- COMMENT start --------------------------------- //
  // the same as let
  // 5
  // 2
  // because of scope declaration
  // ------------- COMMENT end ----------------------------------- //
  
