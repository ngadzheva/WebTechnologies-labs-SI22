name = 'Super Global';
const ivan = { name: 'Ivan', age: 22 };
const gosho = { name: 'Gosho', age: 21 };
const pesho = { name: 'Pesho', age: 23 };

function greeting(a, b, c) {
    console.log(`Hello, ${this.name}!`);
}

// greeting();

ivan.greeting = greeting;
// ivan.greeting();

// ivan.greeting.call(gosho, 1, 2, 3);
// ivan.greeting.apply(pesho, [1, 2, 3]);

ivan.sayHi = function () {
    console.log(`Hi, ${this.name}!`);
};

const hi = ivan.sayHi;
hi();

const bindedHi = ivan.sayHi.bind(ivan);
bindedHi();

const arrow = (a, b, c) => {
    console.log(`Example, ${this.name}`)
    return;
};

arrow.call(ivan);