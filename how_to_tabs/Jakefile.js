/*  globals jake:false, desc:false, task:false, complete:false, fail:false */

(function () {
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");

    //**** General Purpose Tasks

    desc("Default build");
    task("default", ["version", "lint"], function () {
        console.log("\n\n Build OK");
    });

    desc("Run a localhost server");
    task("run",function(){
        console.log("Starting local host server");
        jake.exec("node node_modules/http-server/bin/http-server src", {interactive:true}, complete);
    },{async:true});

    //**** Supporting Tasks

    desc("Lint code for errors");
        task("lint", function () {
            process.stdout.write("Linting JS");
            //jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", {interactive:true}, complete);
            jshint.checkFiles({
                files: ["Jakefile.js", "src/**/*.js"],
                options: {
                    bitwise: true,
                    curly: true,
                    eqeqeq: true,
                    forin: true,
                    freeze: true,
                    futurehostile: true,
                    latedef: "nofunc",
                    nocomma: true,
                    nonbsp: true,
                    nonew: true,
                    strict: true,
                    undef: true,


                    node: true,
                    browser: true,
                },
                globals: {
                    //Mocha globals
                    describe:false,
                    it:false,
                    before:false,
                    after:false,
                    beforeEach:false,
                    afterEach:false
                }
            }, complete, fail);
        }, { async: true });

    desc("Check Node Version");
    task("version", function () {
        console.log("checking node version");

        // function deleteme(){
        //     var a = "someString";

        //     if(typeof a === "string"){
        //         console.log("Hi");
        //     }
        // }

        var packageJson = require("./package.json");
        var expectedNodeVersion = packageJson.engines.node;


        var actualVersion = process.version;

        if (semver.neq(expectedNodeVersion, actualVersion)) {
            fail("current version of node :" + actualVersion + "does not work. Version :" + expectedNodeVersion + "Needed.");
        }

    });

}());