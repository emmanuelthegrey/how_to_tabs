/*  globals desc:false, task:false, complete:false, fail:false */

(function() {
	"use strict";
   
var semver = require("semver");
var jshint = require("simplebuild-jshint");

    desc("Default build");
    task("default",["version", "lint"],function(){
        console.log("\n\n Build OK");
    });
desc("Check Node Version");
task("version", function(){
console.log("checking node version");

desc("Lint code for errors");
task("lint", function(){
process.stdout.write("Linting JS");
//jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", {interactive:true}, this.complete);
jshint.checkFiles({
    files: "Jakefile.js",
    options:{
        bitwise:true,
        curly:true,
        eqeqeq:true,
        forin:true,
        freeze:true,
        futurehostile:true,
        latedef:"nofunc",
        nocomma:true,
        nonbsp:true,
        nonew:true, 
        strict:true,
        undef:true,


        node:true,
        browser:true,
    },
    globals:{}
},complete, fail);
},{async:true});

function deleteme(){
    var a = "someString";

    if(typeof a === "string"){
        console.log("Hi");
    }
}

var packageJson = require("./package.json");
var expectedNodeVersion = packageJson.engines.node;


var actualVersion = process.version;

if(semver.neq(expectedNodeVersion,actualVersion)){
    fail("current version of node :" + actualVersion+ "does not work. Version :" + expectedNodeVersion + "Needed.");
}

});

}());