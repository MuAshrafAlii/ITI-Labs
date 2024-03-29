<?php require_once("./functions.php"); ?>
<?php require_once("./actions.php"); ?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

</head>
<body>

  <div class="container">
  <form action="index.php" method="POST">

<div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input type="text" class="form-control" name="name" id="name">
</div>

<div class="mb-3">
  <label for="phone" class="form-label">Phone</label>
  <input type="text" class="form-control" name="phone" id="phone">
</div>

<div class="mb-3">
  <label for="address" class="form-label">Address</label>
  <input type="text" class="form-control" name="address" id="address">
</div>

<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="email" class="form-control" name="email" id="email">
</div>


<div class="mb-3">
  <input type="submit" class="btn btn-primary" name="action" value="prev">
  <input type="submit" class="btn btn-primary" name="action" value="next">
  <input type="submit" class="btn btn-primary" name="action" value="search">
  <input type="submit" class="btn btn-primary" name="action" value="insert">
  <input type="submit" class="btn btn-primary" name="action" value="update">
  <input type="submit" class="btn btn-primary" name="action" value="delete">
</div>


</form>

  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

</body>
</html>