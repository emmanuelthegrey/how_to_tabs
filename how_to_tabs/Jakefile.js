(function() {
	"use strict";
   
var EXPECTED_NODE_VERSION = "v10.16.0";

    desc("Default build");
    task("default",["version"],function(){
        console.log("\n\n Build OK");
    });
desc("Check Node Version")
task("version", function(){
console.log("checking node version");

let actualVersion = process.version;

if(actualVersion !== EXPECTED_NODE_VERSION){
    fail("current version of node :" + actualVersion+ "does not work. Version :" + EXPECTED_NODE_VERSION + "Needed.")
}

});

}());