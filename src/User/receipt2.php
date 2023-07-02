<?php
include('connection.php');

$number = $_GET['number'];

$result3 = mysqli_query($connection, "SELECT * FROM data where number = $number");
$row3 = $result3->fetch_assoc();

$number2 = $row3['number'];
$name2 = $row3['name'];
$description2 = $row3['description'];
$imagePath2 = $row3['path'];
$price2 = $row3['price'];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="../User/receipt1.css">

    <link rel="shortcut icon" href="../Media/Icon.png" type="image/x-icon">

    <title>Metflix</title>
</head>
<body>
<div class="header" style = "background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('<?php echo $imagePath2; ?>');">
        <nav>
            <img class = "logo"  src = "../Media/Logo.png">
            <div>
                <button onclick="history.back()"> Go Back </button>
            </div>
        </nav>

        <div class="title">
            <?php echo'<h1>' . $name2 . '</h1>' ?>
            <div>
            <h2> Time: <input type = "text" id = "time"></input></h2>
            <h2> No. of Tickets: <input type = "text" id = "ticket"></input></h2>
            <h2> Total Price: <input type = "text" id = "total"></input></h2>
            </div>
            <button id = "button"type="submit">Book</button>
        </div>
    </div>

    <div class="footer">
        <p class="copyright-text">&copy Dahan DelaPeña Dulay Granada Marasigan Mojica</p>
    </div>

    <script>
    
    let count = localStorage.getItem('count');
    let time = localStorage.getItem('time');

    document.querySelector('#ticket').value = count;
    document.querySelector('#total').value = count * 300;

    document.querySelector('#time').value = time;

    let variable = "<?php echo $number; ?>";
    console.log(variable);

    </script>
</body>
</html>