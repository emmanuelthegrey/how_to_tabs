(function(){
    "use strict";
var addition = require("./addition.js");
  var assert = require("../vendor/chai-4.2.0").assert;
describe("Addition",function(){

    it("Adds two numbers",function(){
        assert.equal(addition.add(1,2),3);
    });

it("Adds two numbers where at least one contains floating point",function(){
    assert.equal(addition.add(0.1,0.2),0.3);

});
});
  }());