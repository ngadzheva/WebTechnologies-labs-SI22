<?php
    require_once("./user.php");
    require_once("./student.php");

    $user = new User("ivgerves", "skjhfkdjfd", "ivgerves@gmail.com");
    $user->getUsername();

    $student = new Student("ivgerves", "skjhfkdjfd", "ivgerves@gmail.com", "Ivan", "Ivanov", 66666);
    $student->studentInfo();
    $student->getUsername();
?>