<?php
    require_once "db.php";

    class User {
        private $username;
        private $password;
        private $email;
        private $userId;

        private $db;

        public function __construct($username, $password) {
            $this->username = $username;
            $this->password = $password;

            $this->db = new Database();
        }

        public function getUsername() {
            return $this->username;
        }

        public function getEmail() {
            return $this->email;
        }

        public function getUserId() {
            return $this->userId;
        }

        public function userExists() {
            $query = $this->db->selectUserQuery(['user' => $this->username]);

            if ($query['success']) {
                $user = $query['data']->fetch(PDO::FETCH_ASSOC);

                if ($user) {
                    return ['success' => true, 'exists' => true];
                } else {
                    return ['success' => true, 'exists' => false];
                }
            } else {
                return $query;
            }
        }

        public function isValid() {
            $query = $this->db->selectUserQuery(["user" => $this->username]);

            if ($query["success"]) {
                $user = $query["data"]->fetch(PDO::FETCH_ASSOC);

                if ($user) {
                    $isPasswordValid = password_verify($this->password, $user['password']);

                    if ($isPasswordValid) {
                        return ["success" => true, "data" => $user];
                    } else {
                        return ["success" => false, "error" => 'Invalid password'];
                    }
                } else {
                    return ["success" => false, "error" => 'User not found.'];
                }             
            } else {
                return $query;
            }
        }

        public function createUser($passwordHash, $email) {
            $query = $this->db->insertUserQuery(['username' => $this->username, 'password' => $passwordHash, 'email' => $email]);

            if ($query['success']) {
                $this->password = $passwordHash;
                $this->email = $email;
            }
        }
    }
?>