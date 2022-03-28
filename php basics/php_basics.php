<?php
    $name = "Nevena";

    function info() {
        global $name;
        $age = 25;

        echo "$name $age";
        echo "<br/>";
    }

    info();

    function increment() {
        static $a = 0;

        $a++;

        echo $a;
    }

    increment();
    increment();
    increment();

    function asdf($a, $b = 5, $c = 8) {

    }

    asdf(6, 8);

    echo "<br/>";

    $numbers = [6, 9, 3];
    $numbers[] = 5;
    $numbers[] = 9;
    $numbers[] = 10;
    $numbers[] = 13;

    array_push($numbers, 8);
    array_unshift($numbers, 6);

    array_pop($numbers);
    array_shift($numbers);

    var_dump($numbers);

    echo "<br/>";

    print_r($numbers);

    echo "<br/>";

    print_r(array_slice($numbers, 1, 3));

    echo "<br/>";

    print_r($numbers);

    array_splice($numbers, 1, 3);

    echo "<br/>";

    print_r($numbers);

    array_splice($numbers, 2, 0, 14);

    echo "<br/>";

    print_r($numbers);

    array_splice($numbers, 3, 1, 16);

    echo "<br/>";

    print_r($numbers);

    echo "<br/>";

    foreach($numbers as $value) {
        echo $value;
        echo "<br/>";
    }

    $student = [
        "name" => "Student Name",
        "age" => 23,
        "fn" => 66666
    ];

    print_r($student);

    echo "<br/>";
    echo $student["name"];

    foreach($student as $key => $value) {
        echo "<br/>";
        echo "$key: $value";
    }
?>