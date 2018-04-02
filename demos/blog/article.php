<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Списиок новостей</title>
</head>
<body>
	
	<?php
		$fname = $_GET['id'];
		$text = file_get_contents("data/$fname");
		echo "<h1>$fname</h1>";
		echo "<p>$text</p>";
	?>

	<a href="index.php">Назад</a>

</body>
</html>