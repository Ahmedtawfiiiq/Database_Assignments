<?php
if(isset($_POST['submit']))
{
    $url='localhost';
    $username='root';
    $pass='';
    $database='ahmed';
    $conn=mysqli_connect($url,$username,$pass,$database);
    extract($_POST);
    $query="SELECT * FROM myuser where email='$email' AND password=md5('$password')";
    $sql=mysqli_query($conn,$query);
    $row=mysqli_fetch_array($sql);
    if(is_array($row)){
        echo "Welcome: ".$row[2];}
    else {
        echo '<script>alert("Email and password do not match")</script>';
        echo '<script>window.location.href="login3.html"</script>';
    }
}
?>