<?php

if(count($_POST) > 0) {
	// POST
	$title = $_POST['title'];
	$content = $_POST['content'];

	file_put_contents("data/$title", $content);
	header("Location: index.php");
	exit();

} else {
	 // GET
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Добавление новости</title>
</head>
<body>

<form method='POST'>
	<label for="title">Название файлаы</label><br>
	<input type="text" name="title" id="title"><br>
	<label for="content">Содержимое файла</label><br>
	<textarea name="content" cols="30" rows="10" id="content"></textarea><br>
	<input type="submit" value="Сохранить">
</form>
	
</body>
</html>