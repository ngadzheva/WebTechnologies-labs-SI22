<?php
    class User {
        private $username;
        private $password;
        private $email;

        public function __construct($username, $password, $email) {
            $this->setUsername($username);
            $this->password = $password;
            $this->setEmail($email);
        }

        public function setUsername($username) {
            $this->username = $username;
        }

        public function getUsername() {
            return $this->username;
        }

        public function setEmail($email) {
            $this->email = $email;
        }

        public function getEmail() {
            return $this->email;
        }
    }
?>