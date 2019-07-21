(function(){
    "use strict";
var arithmetic = require("./arithmetic.js");
  var assert = require("./assert.js");
describe("Addition",function(){

    it("Adds two numbers",function(){
        assert.equal(arithmetic.add(1,2),3);
    });

it("Adds two numbers where at least one contains floating point",function(){
    assert.equal(arithmetic.add(0.1,0.2),0.3);

});
});

describe("Subtraction", function(){
    it("subtracts positive numbers", function(){
        var expectedResult = 1;
       var actualResult = arithmetic.subtract(2,1);
       assert.equal(actualResult, expectedResult);
    });
});

describe("Multiplication", function(){
it("Multiple two numbers", function(){
   assert.equal(arithmetic.multiply(2,2), 4);
});
});
  }());