// 'use strict'
let obj = {
  name: 'test',
  sayHi: function() {
    console.log(this.name);
  }
}

obj.sayHi(); // test

/**
 * 
 */
let obj2 = {
  name: 'test2',
  sayHi: function() {
    let aa = () => {
      console.log(this.name);
    }
    aa();
  }
}

obj2.sayHi(); // test2

/**
 * 
 */
let obj3 = {
  name: 'test3',
  sayHi: function() {
    let aa = function() {
      console.log(this.name);
    }
    aa();
  }
}

obj3.sayHi(); // undefined

/**
 * 
 */
function thistest() {
  console.log(this.name);
}

thistest(); // undefined
obj3.thistest = thistest;
obj3.thistest(); // test3