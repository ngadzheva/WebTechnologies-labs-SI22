<?php
    require_once 'user.php';
    require_once 'testInputUtility.php';

    $errors = [];
    $response = [];

    if ($_POST) {
        $userData = json_decode($_POST['data'], true);

        $userName = isset($userData['userName']) ? testInput($userData['userName']) : '';
        $password = isset($userData['password']) ? testInput($userData['password']) : '';
        $confirmPassword = isset($userData['confirmPassword']) ? testInput($userData['confirmPassword']) : '';
        $email = isset($userData['email']) ? testInput($userData['email']) : '';

        if (!$userName) {
            $errors[] = 'Username is required';
        }

        if (!$password) {
            $errors[] = 'Password is required';
        }

        if (!$confirmPassword) {
            $errors[] = 'Confirm password is required';
        }

        if ($userName && $password && $confirmPassword) {
            $user = new User($userName, $password);

            $userExists = $user->userExists();

            if ($userExists['exists']) {
                $errors[] = 'User already exists';
            } else {
                if ($password !== $confirmPassword) {
                    $errors[] = 'Confirm password does not match password';
                } else {
                    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

                    $user->createUser($passwordHash, $email);
                }
            }
        }
    } else {
        $errors[] = 'Invalid request';
    }

    if ($errors) {
        $response = ["success" => false, "data" => $errors];
    } else {
        $response = ["success" => true];
    }

    echo json_encode($response);
?>