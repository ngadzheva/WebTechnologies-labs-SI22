<?php
    require_once 'user.php';
    require_once 'testInputUtility.php';
    require_once 'tokenUtility.php';

    session_start();

    $errors = [];
    $response = [];

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $userData = json_decode($_POST['data'], true);

        $userName = isset($userData['userName']) ? testInput($userData['userName']) : '';
        $password = isset($userData['password']) ? testInput($userData['password']) : '';
        $remember = isset($userData['remember']) ? $userData['remember'] : false;

        if (!$userName) {
            $errors[] = 'Username is required';
        }

        if (!$password) {
            $errors[] = 'Password is required';
        }

        if ($userName && $password) {
            $user = new User($userName, $password);

            $userExists = $user->userExists();

            if ($userExists['exists']) {
                $isValidUser = $user->isValid();

                if ($isValidUser['success']) {
                    $_SESSION['userName'] = $userName;

                    if ($remember) {
                        $token = bin2hex(random_bytes(8));
                        $expires = time() + 60 * 60 * 24 * 30;
                        $tokenUtility = new TokenUtility();

                        $tokenUtility->createToken($token, $user->getUserId(), $expires);

                        setcookie('userToken', $token, $expires);
                    }
                } else {
                    $errors[] = $isValidUser['error'];
                }
            } else {
                $errors[] = 'User not found';
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