/**
 * 派生类Rabbit1也会输出跟基类Aninmal1一样的字段属性值，
 * 即输出了“animal”，并没有输出在自己内部定义的“rabbit”，
 * 是因为「字段」类型在派生类调用父类构造函数（new，或者说调用super()）之后立马就初始化了，
 * 在父类构造器被执行的时候，Rabbit 还没有自己的类字段，
 * 父类的构造函数里输出的是父类自身的字段
 */
class Animal1 {
  name = 'animal';

  constructor() {
    alert(this.name); // (*)
  }
}

class Rabbit1 extends Animal1 {
  name = 'rabbit';
}

new Animal1(); // animal
new Rabbit1(); // animal

/**
 * 函数就不一样
 */
class Animal {
  showName() {  // 而不是 this.name = 'animal'
    console.log('animal');
  }

  constructor() {
    this.showName(); // 而不是 alert(this.name);
  }
}

class Rabbit extends Animal {
  console() {
    console.log('a rabbit');
  }
  showName() {
    console.log('rabbit');
  }
}

new Rabbit();