<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

class Database {
    
    private $db;
    public $selectedTable;
    public $selectedClass;

    function __construct($table, $class) { 
        $dns = "mysql:host=localhost;dbname=examen2"; 
        $user = "root";  
        $password = "root"; 

        $this->db = new PDO($dns, $user, $password); 
        $this->db->exec("set names utf8"); 

        $this->selectedTable = $table; 
        $this->selectedClass = $class; 
    }

    public function fetchAll($createInstanceFunction) { 

        error_log('hjälp');

        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . ";"); 
        $query->execute(); 
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction); 

        if($result) {
            return $result; 
        }
        return false;  
    }


    public function fetchById($id, $createInstanceFunction) {

        $query = $this->db->prepare("SELECT * FROM " . $this->selectedTable . " WHERE Id= " . $id . ";");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_FUNC, $createInstanceFunction);

        if(empty($result)){
            throw new Exception($this->selectedClass . " with ID " . $id . " not found...", 500);
            exit;
        }
        return $result[0];
    }
}

?>