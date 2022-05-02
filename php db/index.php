<?php
    $dbtype = 'mysql';
    $dbhost = 'localhost';
    $dbname = 'www-18ed';
    $username = 'root';
    $password = '';

    try {
        $connection = new PDO("$dbtype:host=$dbhost;dbname=$dbname", $username, $password,
            array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

        // $sql = "CREATE TABLE students(
        //     fn INT(6) UNSIGNED NOT NULL,
        //     userID INT NOT NULL,
        //     firstName VARCHAR(30) NOT NULL,
        //     lastName VARCHAR(30) NOT NULL,
        //     PRIMARY KEY (fn),
        //     FOREIGN KEY (userID) REFERENCES users(id)
        // )";

        // $connection->exec($sql);

        // $sql = "INSERT INTO students (fn, userID, firstName, lastName) VALUES (66666, 1, 'Ivan', 'Ivanov')";
        // $connection->exec($sql);

        $sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?);";
        $usersStatement = $connection->prepare($sql);

        $sql = "INSERT INTO students (fn, userID, firstName, lastName) VALUES (?, ?, ?, ?)";
        $studentsStatement = $connection->prepare($sql);

        // $usersStatement->execute(['user2', 'fdjhgfkjghfkddf', 'user2@test.com']);
        // $usersStatement->execute(['user3', 'fkslfkdf;dfds;fds', 'user3@test.com']);
        // $usersStatement->execute(['user4', 'sfkdsfkdlsfkldsjfdksjf', 'user4@test.com']);

        // $studentsStatement->execute([66667, 5, 'Georgi', 'Georgiev']);
        // $studentsStatement->execute([66668, 6, 'Petar', 'Petrov']);
        // $studentsStatement->execute([66669, 7, 'Maria', 'Georgieva']);

        $sql = "UPDATE students SET firstName = :firstName WHERE fn = :fn";
        $updateStudentStatement = $connection->prepare($sql);

        // $updateStudentStatement->execute(["firstName" => "New Name", "fn" => 66666]);
        // $updateStudentStatement->execute(["firstName" => "Student Name", "fn" => 66667]);

        $sql = "SELECT * FROM students";
        $result = $connection->query($sql);

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo $row['fn'] . ': '  . $row['firstName'] . ' ' . $row['lastName'];
            echo "<br/>";
        }

        $students = $result->fetchAll(PDO::FETCH_ASSOC);

        $users = [
            ['user5', 'dgjfdkgjkflgdf', 'user5@test.com'],
            ['user6', 'fdjhgjfdkgfdfdgf', 'user6@test.com'],
            ['user7', 'fdjhfjgdfjgdfjgl', 'user7@test.com']
        ];

        $students = [
            [66670, 11, 'Name', 'Nameev'],
            [66671, 12, 'Name', 'Nameev'],
            [66672, 13, 'Name', 'Nameev']
        ];

        $connection->beginTransaction();

        foreach($users as $user) {
            $usersStatement->execute($user);
        }

        foreach($students as $student) {
            $studentsStatement->execute($student);
        }

        $connection->commit();
    } catch(PDOException $e) {
        $connection->rollback();
        echo $e->getMessage();
    }
?>