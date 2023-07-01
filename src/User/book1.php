<?php
include('connection.php');
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="../User/book1.css">

    <link rel="shortcut icon" href="../Media/Icon.png" type="image/x-icon">

    <title>Metflix</title>
</head>
<body>
    <div class="header">
        <nav>
            <img class = "logo"  src = "../Media/Logo.png">
            <div>
                <button onclick="history.back()"> Go Back </button>
            </div>
        </nav>

        <div class="title">
            <?php echo'<h1>' . $name1 . '</h1>' ?>
            <h2>Now showing in IMetflix</h2>
            <?php echo'<h2> Price: ' . $price1 . '</h2>' ?>
            <?php echo'<p>' . $longdescribe . '</p>' ?>
            <div class="container">
                <div class = "number">
                    <h3>How many tickets?</h3>
                    <div>
                        <button id = "add">+</button>
                        <input type = "text">
                        <button id = "subtract">-</button>
                    </div>
                </div>
                <div class = "number">
                    <h3>What Time?</h3>
                    <div>
                        <select id = "time">
                            <option> 10:00AM</option>
                            <option> 12:30AM</option>
                            <option> &nbsp;3:00AM</option>
                            <option> &nbsp;5:30AM</option>
                            <option> &nbsp;8:00AM</option>
                        </select>
                    </div>
                </div>
            </div>
            <button id = "button"type="submit">Book</button>
        </div>
    </div>

    <div class="footer">
        <p class="copyright-text">&copy Dahan DelaPeña Dulay Granada Marasigan Mojica</p>
    </div>
</body>
</html>