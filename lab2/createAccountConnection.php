<?php
if(isset($_POST['submit'])){

    $url='localhost';
    $username='root';
    $pass='';
    $database='ahmed';
    $conn=mysqli_connect($url,$username,$pass,$database);
    extract($_POST);
    $sql1=mysqli_query($conn,"SELECT * FROM myuser where email='$email'");
    if(mysqli_num_rows($sql1)>0) {
        echo '<script>alert("Email already exists")</script>';
        echo '<script>window.location.href="createAccount3.html"</script>';
    }
    else {
        $query="INSERT INTO myuser(email, name, password) VALUES ('$email', '$name', md5('$password'))";
        mysqli_query($conn,$query);
        echo "Welcome: ".$name;
    }
}
?>
