function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function() {
        console.log(`Hello, ${this.name}`);
    }
}

const ivan = new Person('Ivan', 22);
ivan.name;
ivan.age;
ivan.greeting();

Person.prototype.info = function () {
    console.log(`${this.name}: ${this.age}`);
};

const gosho = new Person('Gosho', 23);
gosho.info();
ivan.info();

function Student(name, age, fn) {
    Person.call(this, name, age);

    this.fn = fn;

    let _mark;

    this.getMark = () => _mark;
    this.setMark = mark => _mark = mark;
}

Student.prototype = Object.create(Person.prototype);

const pesho = new Student('Pesho', 22, 66666);
pesho.greeting();
pesho.info();
pesho.fn;
pesho.setMark(5);
console.log(pesho.getMark());

Student.prototype.studentInfo = function() {
    this.info();
    console.log(`${this.fn}`);
}

pesho.studentInfo();

const maria = new Person('Maria', 22);
maria.studentInfo();