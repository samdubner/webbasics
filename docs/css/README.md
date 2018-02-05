- [Basic CSS file](#basic-css-file)
- [Class](#class)
- [Id](#id)
- [Size](#size)
- [Colors](#colors)
- [Margin](#margin)
- [Padding](#padding)

# Basic CSS file
```css
body {
  background-color: black;
  padding: 0;
}

.className {
  color: red;
  text-align: center;
}

#idName {
  padding-left: 10px;
  color: #ff0000;
}
```

# Class
In order to change the properties of elements of a specific class, you must put a `.` then the name of the class

```css
.box {
  color: red;
}
```

# Id
In order to change the properties of elements with a specific id, you must put a `#` then the name of the id.

```css
#name {
  background-color: red;
}
```

# Size
- Width: set the width of a div, image, or similar element
- Height: set the height of a div, image, or similar element

```css
.divName {
  width: 100px;
  height: 200px;
}
```

# Colors
- background-color: changes the color behind the element
- color: changes the color of the element itself

You can either use `rgb(0-255, 0-255, 0-255)` or a hexadecimal value from `#000000` to `#ffffff` or even one of the simple recognized colors like `red` or `green`

```css
p {
  color: #ff0000
}
```

# Margin
The margin of an element is the space on the outside around the element. You can either use the shorthand `margin` property or use either `margin-right`, `margin-left`, `margin-top`, or `margin-bottom`

```css
.box {
  margin-right: 15px;
}
```

# Padding
Padding is extremely similar to margin, except that instead of being the space on the outisde of an element, it is the space inside of an element.

```css
.box {
  padding: 2px;
}
```