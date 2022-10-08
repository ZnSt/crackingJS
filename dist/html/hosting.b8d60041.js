// HOSTING ES5
(function() {
    console.log("test at start: ", test);
    test = 7;
    console.log("test before declaration: ", test);
    var test = 5;
    console.log("test at end: ", test);
})();
(function() {
    here = function() {};
    console.log("at start: ", here);
    here = 10;
    console.log("at end: ", here);
})();
console.log(window.here);

//# sourceMappingURL=hosting.b8d60041.js.map
