(function(){
  var assert = require("chai").assert;
describe("Addition",function(){

    it("Adds two numbers",function(){
        assert.equal(add(1,2),3);
    })

it("Adds two numbers where at least one contains floating point",function(){
    assert.equal(add(.1,.2),.3);

})
})


function assertEqual(actual, expected){
    if(actual !== expected) throw new Error("Expected: " + expected + " does not equal Actual: " + actual);
}

function add(a, b){

    if(a % 1 !== 0 || b % 1 !== 0){
        return Math.round((a + b) * 100) / 100 ;
    }
    return a + b;
}

//assertEqual(add(1,2),4);

  }());