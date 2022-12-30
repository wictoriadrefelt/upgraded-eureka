<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

try {

    include_once("./../controllers/productController.php");

    if($_SERVER["REQUEST_METHOD"] == "GET") {

        if($_GET["action"] == "getAll") {

            $controller = new ProductController();
            header('Content-Type: application/json; charset=utf-8');
            echo(json_encode($controller->getAll()));
            exit;

        } else if($_GET["action"] == "getById") {

            $controller = new ProductController();

            if(!isset($_GET["id"])) {
                throw new Exception("Missing ID", 501);
                exit;
            }

            echo(json_encode($controller->getById((int)$_GET["id"])));
            exit;
        }
    }

}catch(Exception $err) {
    echo json_encode(array('Message' => $err->getMessage(), "Status" => $err->getCode()));
}

?>