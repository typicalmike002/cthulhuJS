# cthulhuJS
###### -0.0.4
Provides HTML parsing assistance from "Them and their blasphemous ways which doom us all to inhuman toil for the One whose Name cannot be expressed in the Basic Multilingual Plane".

## User's Guide
Add Cthulhu to your project:
```
<script src="cthulhuJS/cthulhu.min.js"></script>
```
### cthulhu.stripTags(html[, whiteList], isBlackList)
#### Parameters
**html:**
    string containing html tags.<br />
**whiteList(Array) (optional):**
    array of tags to leave behind.  Do not wrap them in brackets.<br />
**isBlackList(bool) (optional):**
	Boolean value, passing true will convert the white list into a black list and the function will now only remove items specified inside this list.
#### Description
Strips a string of all html tags, excluding any tags declared in the white list.
### cthulhu.stripEntities(entities[, whiteList], isBlackList)
#### Parameters
**entities:**
	string containing html entities.<br />
**whiteList(Array) (optional):**
	array of entities to leave behind.  Leave out the appersand and semicolon.
**isBlackList(bool) (optional):**
	Boolean value, passing true will convert the white list into a black list and the function will now only remove items specified inside this list.
#### Description
Strips a string of all html entities, excluding any entities declared in the white list.
### Example
An example function that removes all html except the strong tag and nbsp entity:
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

				// Removes all html tags except for <strong>
				resultDiv.innerHTML = cthulhu.stripTags(exampleValue, ['strong']); 

				// Removes only the &nbsp; entity found inside exampleValue
				resultDiv.innerHTML = cthulhu.stripEntities(resultsDiv.innerHTML, ['nbsp'], true);
			}
		</script>
	</body>
</html>
```
#### About
[Inspired by this](http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags)<br />

What started as a programming exercise on test driven development quickly turned into a thing that can be useful in specific situations.  I've decided to use negative numbers for each version which seems more fitting for a library called cthulhu.  With each version, I descend further down the path of madness...

#### License
The MIT License

Copyright (c) 2016 Michael Townsend

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
