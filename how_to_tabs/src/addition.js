(function(){
    "use strict";

    exports.add = function add(a, b){

    if(a % 1 !== 0 || b % 1 !== 0){
        return Math.round((a + b) * 100) / 100;
    }
    return a + b;
};
  }());