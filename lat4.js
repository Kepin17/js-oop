class Peliharaan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makan() {
    console.log(`${this.name} sedang makan`);
  }
}

class Cat extends Peliharaan {
  constructor(name, age, lives) {
    super(name, age);
    this.lives = lives;
  }

  sound() {
    return "meow meow";
  }

  nyawa() {
    console.log(this.lives);
  }
}

class Dog extends Peliharaan {
  sound() {
    return "woof woof";
  }
}

const kucing = new Cat("Kucing", 3, 9);
kucing.makan();
const suara = kucing.sound();
kucing.nyawa();
console.log(suara);
const Anjing = new Dog("Makcang", 3);
Anjing.makan();
const suara2 = Anjing.sound();
console.log(suara2);
