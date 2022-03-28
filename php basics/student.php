<?php
    // import('./user.php');
    // require('./user.php');
    require_once('./user.php');

    class Student extends User {
        private $firstName;
        private $lastName;
        private $fn;

        public function __construct($username, $password, $email, $firstName, $lastName, $fn) {
            parent::__construct($username, $password, $email);

            $this->firstName = $firstName;
            $this->lastName = $lastName;
            $this->fn = $fn;
        }

        public function studentInfo() {
            echo "$this->firstName $this->lastName $this->fn parent::getEmail()";
        }
    }
?>