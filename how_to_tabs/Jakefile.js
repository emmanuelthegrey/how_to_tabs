(function() {
	"use strict";
   
var semver = require("semver");

    desc("Default build");
    task("default",["version", "lint"],function(){
        console.log("\n\n Build OK");
    });
desc("Check Node Version");
task("version", function(){
console.log("checking node version");

desc("Lint code for errors");
task("lint", function(){
console.log("Linting JS");
jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", {interactive:true}, this.complete);
},{async:true});

var packageJson = require("./package.json");
var expectedNodeVersion = packageJson.engines.node;


var actualVersion = process.version;

if(semver.neq(expectedNodeVersion,actualVersion)){
    fail("current version of node :" + actualVersion+ "does not work. Version :" + expectedNodeVersion + "Needed.");
}

});

}());