!function (underscore) {
 underscore.someawesomemethod = "yay!!";
 console.log(underscore.VERSION);
}(_);

var awesomeNewModule.sub = (function(exports) {
 var exports = {
  foo: 5,
  bar: 10
 };
 exports.helloMars = function () {
  console.log("Hello Mars!");
 };
 exports.goodbye = function() {
  console.log("Goodbye!");
 };
 return exports;
}(awesomeNewModule.sub || {}));