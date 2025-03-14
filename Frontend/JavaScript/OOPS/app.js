class Mamals {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}

class Dog extends Mamals {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} is barking`);
    }
    // also you can add a method which overrides the parent class method
    walk() {
        console.log(`${this.name} is walking very fast`);
    }
}

class Cat extends Mamals {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    meow() {
        console.log(`${this.name} is meowing`);
    }
}

let dog1 = new Dog('Tommy', 'Husky');
dog1.walk();
dog1.bark();

let cat1 = new Cat('Kitty', 'Persian');
cat1.walk();
cat1.meow();
