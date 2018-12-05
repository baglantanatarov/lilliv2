<?php
    $name = $_FILES['img']['name'];
    $tmp_name = $_FILES['img']['tmp_name'];
	$new_name = "../img/upload/$name";
    if(move_uploaded_file($tmp_name, $new_name)){   
		echo $new_name;
    }else{
        echo "error";
    }
?>
