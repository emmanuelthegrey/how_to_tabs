(function() {
	"use strict";
   
var semver = require("semver");

    desc("Default build");
    task("default",["version"],function(){
        console.log("\n\n Build OK");
    });
desc("Check Node Version")
task("version", function(){
console.log("checking node version");

var packageJson = require("./package.json")
var expectedNodeVersion = packageJson.engines.node;


let actualVersion = process.version;

if(semver.neq(expectedNodeVersion,actualVersion)){
    fail("current version of node :" + actualVersion+ "does not work. Version :" + expectedNodeVersion + "Needed.")
}

});

}());