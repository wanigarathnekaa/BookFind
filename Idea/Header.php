<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <!-- <link rel="stylesheet" href="Login.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        *{
            margin: 0;
            padding: 0;
            font-family: Arial, Helvetica, sans-serif;
        }

        body{
            background-image: url(https://cdn.pixabay.com/photo/2015/03/02/23/40/father-656734_1280.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            /* background-attachment: fixed; */
            height: 100%;
        }

        nav{
            width: 100%;
            overflow: auto;
            background-color: #9f9f9f00;
            backdrop-filter: blur(8px);
            box-sizing: border-box;
            box-shadow: rgb(132, 159, 255) 0px 7px 29px 0px;
        }

        nav ul{
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        nav ul li{
            display: inline;
            float: left;
        }

        nav ul li a{
            font-weight: 4px;
            padding: 12px;
            color: rgb(10, 0, 124);
            display: block;
            text-decoration: none;
        }

        nav ul li a:hover{
            background-color: rgba(0, 0, 0, 0.581);
        }

        .active{
            position: absolute;
            right: 3px;
        }

        .Home{
            background-color: rgba(42, 88, 253, 0.671);
        }

        form #uid, #pwd, button{
            font-family: 'Courier New', Courier, monospace;
            background-color: rgba(255, 255, 255, 0.457);
            position: absolute;
            right: 45%;
            top:60%;
            border-radius: 4px;
            padding: 10px 60px 10px 0px;
        }

        form #pwd{
            top: 68%;
        }

        form button{
            text-align: center;
            padding: 10px 89px 10px 88px;
            top: 76%;
            background-color: rgba(11, 0, 111, 0.649);
            border: 0;
        }

        .btntext{
            font-family: 'Courier New', Courier, monospace;
            font-size: 17px;
            font-weight: bold;
            color: rgb(0, 19, 161);
        }

        .quotes, .quotes2{
            padding: 25px 100px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 40px;
            font-weight: bolder;
            color: rgba(0, 19, 161, 0.718);
        }

        .para{
            position: absolute;
            /* right: 25px; */
            /* top: 45%; */
        }

    </style>
</head>
<body>
    <div class="backgroundImage"></div>
    <nav>
        <ul>
            <li><a href="#" class="Home"><i class="fa fa-fw fa-home"></i>Home</a></li>
            <li><a href="#">Logo</a></li>
            <li><a href="#" class="active"><i class="fa fa-fw fa-user"></i>Sign up</a></li>
        </ul>
    </nav>