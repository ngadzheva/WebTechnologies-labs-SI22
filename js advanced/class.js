class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, ${this.name}`);
    }

    info() {
        console.log(`${this.name}: ${this.age}`);
    }
}

const ivan = new Person('Ivan', 22);
ivan.name;
ivan.age;
ivan.greeting();
ivan.info();

class Student extends Person {
    constructor(name, age, fn) {
        super(name, age);

        this.fn = fn;

        let _mark;

        this.getMark = () => _mark;
        this.setMark = mark => _mark = mark;
    }

    studentInfo() {
        super.info();
        console.log(`${this.fn}`);
    }
}

const pesho = new Student('Pesho', 22, 66666);
pesho.greeting();
pesho.info();
pesho.fn;
pesho.setMark(5);
console.log(pesho.getMark());
pesho.studentInfo();