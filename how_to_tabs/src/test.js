(function(){
  

function assertEqual(actual, expected){
    if(actual !== expected) throw new Error("Expected: " + expected + " does not equal Actual: " + actual);
}

function add(a, b){
    return a + b;
}

assertEqual(add(1,2),4);

  }());