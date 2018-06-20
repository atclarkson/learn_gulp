const sampleSize = 10;

const myFunkyFunc = function(num) {
  return num + num * num;
}

myFunkyFunc(sampleSize);

/**
 * Check if input is equal to 200
 * @param  {Number} test input to be checked
 * @return {Bool}      return true if equals 200
 */
(function isIt200(test) {
  return test === 200;
})();

class Fruit {
  constructor(){
    this.type = 'apple';
    this.color = 'red';
  }
  changeToGreen() {
    if (this.color !== 'green') {
      this.color = 'green';
    }
  }
}

const myApple = new Fruit();

console.log(`My ${myApple.type} is ${myApple.color}.`);
