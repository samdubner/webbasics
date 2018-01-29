#Basic HTML site:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>
            Title
        </title>
        <meta charset="utf-8">
        Other Data
    </head>
    <body>
        Visual Elements
    </body>
    (Scripts and Styles)
</html>
```

#Headers:
`<h1></h1>`: Header (largest)
`<h2></h2>`: Header
`<h3></h3>`: Header
`<h4></h4>`: Header
`<h5></h5>`: Header
`<h6></h6>`: Header (smallest)

#Text:
`<p></p>`: paragraph (normal text); treats linebreaks and multiple spaces as a single space
`<pre></pre>`: same as p only that this preserves linebreaks and spaces

#Content Dividers:
`<div></div>`: divides content (leaves a linebreak after)
`<span></span>`: same as div only that content afterwards is on the same line

#Text Modifiers:
`<a></a>`: creates a link (links to what is inside the href attribute)
`<i></i>`: makes the text italics
`<strong></strong>`: makes the text bold
`<u></u>`: makes the text underlined
`<sup></sup>`: makes the text superscript
`<sub></sub>`: makes the text subscript

#Misc.:
`<img />`: Creates an image from src attribute, if not loaded displays text in alt attribute
`<br />`: Creates a linebreak
`<link />`: used for CSS files outside HTML file (`<link href="some css file" ref="stylesheet" type="text/css" />`)

#Styling & Scripting Tags:
`<style></style>`: Used for CSS in HTML file
`<script></script>`: executes js inside or from src attribute