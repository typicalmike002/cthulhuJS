# cthulhuJS
###### 0.0.0
Provides HTML parsing assistance from "Them and their blasphemous ways which doom us all to inhuman toil for the One whose Name cannot be expressed in the Basic Multilingual Plane".

## User's Guide
Add Cthulhu to your project:
```
<script src="cthulhuJS/cthulhu.min.js"></script>
```
### cthulhu.strip(html[, whiteList])
#### Parameters
**html:**
    string containing html markup.<br />
**whiteList (optional):**
    array of tags to leave behind.  This will leave behind both opening and closing tags and is labeled by the tag name without brackets.<br />
#### Description
Strips a string of all html inclucing html entities.
#### Example
An example function that removes all html except the strong tag: <strong></strong>
``` html
<!DOCTYPE html>
<html>
	<head>
		<title>cthulhu.js example</title>
		<script src="cthulhuJS/cthulhu.min.js"></script>
	</head>
	<body>
		<textarea id="example" rows="4" cols="50"><h1><strong>Removes h1 but not strong!</strong></h1>
		</textarea>
		<input type="submit" onclick="example(document.getElementById('example').value);">
		<div id="result"></div>
		<script>
			function example(exampleValue){

				var resultDiv = document.getElementById('result');
				resultDiv.innerText = cthulhu.strip(exampleValue, ['strong']); // Removes all html except for <strong> and <h2>
			}
		</script>
	</body>
</html>
```


