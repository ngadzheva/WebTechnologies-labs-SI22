const student = {
    firstName: 'Name',
    lastName: 'Last Name',
    fn: 666666
};

student.firstName
student.lastName

// const lastName = student.lastName;

const { firstName, lastName, fn: facultyNumber, mark = 6 } = student;
firstName

const numbers = [1, 2, 3, 4, 5, 6];
const one = numbers[0];

const [ first, second, third ] = numbers;
const [ , two, , , five ] = numbers;

let a = 5;
let b = 8;

let temp = a;
a = b;
b = temp;

[ b, a ] = [a, b];

const obj = {
    prop: 'value',
    p: 2,
    pp: [1, 2, 3]
};

const obj1 = {
    prop1: 'value 1',
    p1: 6,
    pp: [1, 5, 7]
};

const newObj = {
    asdf: 'asdf',
    ...obj,
    newProp: 'new value'
};

const mergedObj = {
    ...obj,
    ...obj1
};

const nums = [1, 4, 6, 8, 9];
const newNums = [6, 9, ...nums, 3, 8, 5];
const nums1 = [1, 5, 9, 6];
const mergedNums = [...nums, ...nums1];

const sum = (a, b, c, d) => a + b + c + d;

sum(nums[0], nums[1], nums[2], nums[3]);
sum(...nums);