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
		$news = scandir('data');

		foreach($news as $one) {
			if(is_file("data/$one")) {
				echo "<a href=\"article.php?id=$one\">$one</a><hr>";
			}
		}
	?>
	<a href="add_news.php">Добавить новость</a>

</body>
</html>