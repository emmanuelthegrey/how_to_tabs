(function() {
	"use strict";
   


    desc("Default build");
    task("default",["version"],function(){
        console.log("\n\n Build OK");
    });
desc("Check Node Version")
task("version", function(){
console.log("checking node version");

var packageJson = require("./package.json")
var expectedNodeVersion = "v" + packageJson.engines.node;


let actualVersion = process.version;

if(actualVersion !== expectedNodeVersion){
    fail("current version of node :" + actualVersion+ "does not work. Version :" + expectedNodeVersion + "Needed.")
}

});

}());