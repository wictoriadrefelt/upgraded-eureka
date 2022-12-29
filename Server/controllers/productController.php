<?php

try {

    include_once("./../handlers/createInstanceFunctions.php");
    include_once("./../controllers/mainController.php");

    class ProductController extends MainController {
        private $createFunction = "createProduct";

        function __construct() {
            parent::__construct("Product", "Product");
        }

        public function getAll() {
            return $this->database->fetchAll($this->createFunction);
        }

        public function getById($id) {
            return $this->database->fetchById($id, $this->createFunction);
        }
    }
} catch(Exception $err) {
    echo json_encode(array('Message' => $err->getMessage(), "Status" => $err->getCode()));
}

?>