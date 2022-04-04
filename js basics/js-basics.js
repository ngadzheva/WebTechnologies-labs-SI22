var a = 5;

b = 6;

var b;

function asdf() {
    var c = 8;

    c += a * b;

    for(var i = 0; i < 10; ++i) {
        var d = i * 10;

        d += c;
    }

    console.log(d);
    console.log(c);
}

asdf();

// console.log(c);
// console.log(d);

console.log(1 == '1');
console.log(1 === '1');
console.log(1 + '1');
console.log(1 - '1');
console.log(1 - 'asdf');
console.log(2 - 'adh55sjd55');
console.log(isNaN('55jdfjsfk'));
console.log(2 + +'1');
console.log(+'55asfgds');

var name =  'Nevena';
function greeting(name) {
    console.log(`Hello, ${name}!`);
}

greeting(name);

var numbers = [1, 2, 3, 4];
var arr = Array(6);

numbers[1];
numbers[6] = 7;

console.log(numbers);

numbers.push(9);
numbers.unshift(6);
numbers.pop();
numbers.shift();

var sliced = numbers.slice(1, 3);
console.log(numbers);
console.log(sliced);

numbers.splice(1, 2);
console.log(numbers);

numbers.splice(2, 0, 6);
numbers.splice(4, 1, 8);

console.log(numbers);

var mapped = numbers.map(function (value) {
    return value * 5;
});

console.log(mapped);

var sum = numbers.reduce(function(acc, value) {
    return acc += value;
}, 0);

console.log(sum);

var filtered = numbers.filter(function (value) {
    return value % 2 == 0;
});

console.log(filtered);

numbers.forEach(function (value, index) {
    console.log(`${index}: ${value}`);
});

var asd = [, 4, , 5, , 6];

var student = {
    firstName: 'Student Name',
    age: 22,
    fn: 66666
};

student['name'];
student.age;

student['mark'] = 6;
student.lastName = 'Last Name';

var key = 'fn';
student[key];

for (var key in student) {
    console.log(key);
    console.log(student[key]);
}

for (var value of numbers) {
    console.log(value);
}

Object.keys(student).forEach(function (key) {
    console.log(`${key}: ${student[key]}`);
});

Object.values(student).forEach(function (value) {
    console.log(value);
});

Object.entries(student).forEach(function (key, value) {
    console.log(`${key}: ${value}`);
});

var jsonStudent = JSON.stringify(student);
console.log(jsonStudent);
jsonStudent += 'asdf';
var parsedStudent = JSON.parse(jsonStudent);
console.log(parsedStudent);