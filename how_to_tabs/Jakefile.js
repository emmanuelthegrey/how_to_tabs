
/*  globals jake:false, desc:false, task:false, complete:false, fail:false */

(function () {
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    var karma = require("simplebuild-karma"); 
    var shell = require("shelljs");
    var KARMA_CONFIG = "karma.conf.js";
    var DIST_DIR = "GeneratedCode/dist";
    //**** General Purpose Tasks

    desc("Start the Karma Server (Do this first)");
    task("karmaStart", function () {
        console.log("Karma Server started");
        karma.start({
            configFile: KARMA_CONFIG
        }, complete, fail);
    }, { async: true });

    desc("Default build");
    task("default", ["version", "lint", "test"], function () {
        console.log("\n\n Build OK");
    });

    desc("Run a localhost server");
    task("run",["build"], function () {
        console.log("Starting local host server");
        jake.exec("node node_modules/http-server/bin/http-server " + DIST_DIR, { interactive: true }, complete);
    }, { async: true });

    //**** Supporting Tasks

    desc("Build distribution directory");
    task("build", [DIST_DIR],function(){
console.log("Building Distribution directory");
    });

    desc("Erase all generated files");
    task("clean", function(){
        console.log("Erasing generated files: .");
        shell.rm("-rf", "GeneratedCode");
    });

    directory(DIST_DIR);

    desc("Run Tests");
    task("test", function () {
        console.log("Testing Javascript: ");
        karma.run({
            configFile: KARMA_CONFIG,
            expectedBrowsers: ["Chrome 75.0.3770 (Mac OS X 10.14.5)"
        ],
            strict:false
        }, complete, fail);
    }, { async: true });

    desc("Lint code for errors");
    task("lint", function () {
        process.stdout.write("Linting JS");
        //jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", {interactive:true}, complete);
        jshint.checkFiles({
            files: ["Jakefile.js", "src/**/*.js"],
            options: lintOptions(),
            globals: lintGlobals()
        }, complete, fail);
    }, { async: true });

    function lintOptions() {
        return {
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
        };
    }

    function lintGlobals() {
        return {
            //Mocha globals
            describe: false,
            it: false,
            before: false,
            after: false,
            beforeEach: false,
            afterEach: false
        };
    }

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