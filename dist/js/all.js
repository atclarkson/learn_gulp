'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sampleSize = 10;

var myFunkyFunc = function myFunkyFunc(num) {
  return num + num * num;
};

myFunkyFunc(sampleSize);

/**
 * Check if input is equal to 200
 * @param  {Number} test input to be checked
 * @return {Bool}      return true if equals 200
 */
(function isIt200(test) {
  return test === 200;
})();

var Fruit = function () {
  function Fruit() {
    _classCallCheck(this, Fruit);

    this.type = 'apple';
    this.color = 'red';
  }

  _createClass(Fruit, [{
    key: 'changeToGreen',
    value: function changeToGreen() {
      if (this.color !== 'green') {
        this.color = 'green';
      }
    }
  }]);

  return Fruit;
}();

var myApple = new Fruit();

console.log('My ' + myApple.type + ' is ' + myApple.color + '.');