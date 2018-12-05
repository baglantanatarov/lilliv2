<?php
    $name = $_FILES['img']['name'];
    $tmp_name = $_FILES['img']['tmp_name'];
    if(move_uploaded_file($tmp_name, "img/upload/" . $name)){    
        echo "ok";
        header('Location: /login.html');
exit;
    }else{
        echo "error";
    }
?>
