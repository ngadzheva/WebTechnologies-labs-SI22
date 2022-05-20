const fs = require('fs');
const { request } = require('http');

const updateFn = students => students.replace(/66/g, '12');

let result = '';

console.log('Before reading');

fs.readFile('./students.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('File read successfully');

    result = updateFn(data);

    console.log('Students updated');

    fs.writeFile('./editedStudents.txt', result, 'utf-8', error => {
        if (error) {
            console.error(error);
            return;
        }

        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            if (request.responseText.status == 200) {
                fs.writeFile('./todos.txt', JSON.parse(request.responseText), (error) => {

                })
            } else {

            }
        });

        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
        xhr.send(null);
    
        console.log('File written successfully');
    });
});

// result = updateFn(result);


// fs.writeFile('./editedStudents.txt', result, 'utf-8', error => {
//     if (error) {
//         console.error(error);
//         return;
//     }

//     console.log('File written successfully');
// });

console.log('DONE');

const read = (filePath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (error, data) => {
            if (error) {
                reject();
                return;
            }

            resolve(data);
        });
    });
};

const write = (filePath, encoding, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, encoding, (error) => {
            if (error) {
                reject();

                return;
            }

            resolve();
        });
    });
};

read('./students.txt', 'utf-8')
    .then(data => updateFn(data))
    .then(updatedData => write('./editedStudents.txt', updatedData, 'utf-8'))
    .then(() => console.log('DONE'))
    .catch(error => console.error(error));

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {

    },
    body: JSON.parse('asdf')
})
    .then(response => response.json())
    .then(result => { /* handle response */ })
    .catch(error => console.error(error))

const asyncExample = async () => {
    const result = await read('./students.txt', 'utf-8');

    const updatedResult = updateFn(result);

    await write('./editedStudents.txt', updatedResult, 'utf-8');

    console.log('DONE');
}

asyncExample();