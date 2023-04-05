<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

    <title>Silly story generator</title>

    <style>

    body {
      font-family: helvetica, sans-serif;
      width: 350px;
    }

    label {
      font-weight: bold;  
    }

    div {
      padding-bottom: 20px;
    }

    input[type="text"] {
      padding: 5px;
      width: 150px;
    }

    p {
      background: #FFC125;
      color: #5E2612;
      padding: 10px;
      visibility: hidden;
    }

    </style>
  </head>

  <body>
    <div>
      <label for="customname">Enter custom name:</label>
      <input id="customname" type="text" placeholder="">
    </div>
    <div>
      <label for="us">US</label><input id="us" type="radio" name="ukus" value="us" checked>
      <label for="uk">UK</label><input id="uk" type="radio" name="ukus" value="uk">
    </div>
    <div>
      <button class="randomize">Generate random story</button>
    </div>
    <!-- Thanks a lot to Willy Aguirre for his help with the code for this assessment -->
    <p class="story"></p>
    

    
  </body>
  <script src="main.js"></script>
</html>
