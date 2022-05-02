window.onload = function() {
    console.log('Page Loaded');
};

(function () {
    console.log('Loaded');

    var studentsHeader = document.getElementsByTagName('header')[0];
    console.log(studentsHeader);
    var headerRow = document.getElementById('header-row');
    console.log(headerRow);
    var studentRow = document.getElementsByClassName('student')[0];
    var addButton = document.getElementsByName('add')[0];
    document.querySelectorAll('[type="number"]');

    studentsHeader.innerHTML += ' Marks';

    var actionTh = document.createElement('th');
    actionTh.innerHTML = 'Action';

    headerRow.appendChild(actionTh);

    var markTh = document.createElement('th');
    var markThText = document.createTextNode('Mark');
    markTh.appendChild(markThText);

    actionTh.before(markTh);

    var markTd = document.createElement('td');
    var markTdText = document.createTextNode('6');
    markTd.appendChild(markTdText);

    var fnTd = document.getElementById('fn');
    fnTd.after(markTd);

    var deleteBtn = document.querySelector('#delete button');
    deleteBtn.addEventListener('click', deleteStudent);

    addButton.addEventListener('click', addStudent);

    studentRow.addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = 'red';
    });

    studentRow.addEventListener('mouseleave', function (event) {
        event.target.style.backgroundColor = '';
    });
})();

function addStudent(event) {
    event.preventDefault();

    var firstName = document.getElementsByName('first-name')[0];
    var lastName = document.getElementsByName('last-name')[0];
    var fn = document.getElementsByName('fn')[0];
    var mark = document.getElementsByName('mark')[0];

    var studentData = {
        firstName: firstName.value,
        lastName: lastName.value,
        fn: fn.value,
        mark: mark.value
    };

    appendStudentTable(studentData);

    firstName.value = '';
    lastName.value = '';
    fn.value = 0;
    mark.value = 0;
}

function deleteStudent (event) {
    var studentToDelete = event.target.parentNode.parentNode;
    studentToDelete.parentNode.removeChild(studentToDelete);
}

function appendStudentTable(studentData) {
    var tbody = document.getElementsByTagName('tbody')[0];

    var studentRow = document.createElement('tr');
    studentRow.setAttribute('class', 'student');

    var firstNameTd = document.createElement('td');
    firstNameTd.innerHTML = studentData.firstName;

    var lastNameTd = document.createElement('td');
    lastNameTd.innerHTML = studentData.lastName;

    var fnTd = document.createElement('td');
    fnTd.innerHTML = studentData.fn;

    var markTd = document.createElement('td');
    markTd.innerHTML = studentData.mark;

    var deleteTd = document.createElement('td');

    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', deleteStudent);
    deleteTd.append(deleteBtn);

    studentRow.append(firstNameTd, lastNameTd, fnTd, markTd, deleteTd);

    tbody.appendChild(studentRow);
}
