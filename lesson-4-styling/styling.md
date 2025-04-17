# Notes on CSS and Its Interaction with JavaScript and HTML

## CSS and HTML
- **HTML** provides the structure of a webpage, while **CSS** is used to style and layout the content.
- CSS can be applied to HTML using:
    - Inline styles: `<div style="color: red;">Text</div>`
    - Internal stylesheets: `<style>div { color: red; }</style>`
    - External stylesheets: `<link rel="stylesheet" href="styles.css">`

## CSS and JavaScript
- JavaScript can dynamically manipulate CSS to create interactive and responsive designs.
- Common methods:
    - **Modifying styles directly**: `element.style.color = "blue";`
    - **Adding/removing classes**: `element.classList.add("class-name");`
    - **Toggling classes**: `element.classList.toggle("class-name");`

## Useful Resources
- [Flexbox Froggy](https://flexboxfroggy.com): A fun game to learn CSS Flexbox.
- [Grid Garden](https://cssgridgarden.com): A game to practice CSS Grid.
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Comprehensive CSS documentation.
- [CSS Tricks](https://css-tricks.com): Tips, tricks, and guides for CSS.

## Example: Interaction Between CSS, HTML, and JavaScript
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS and JS Example</title>
    <style>
        .highlight {
            color: white;
            background-color: blue;
        }
    </style>
</head>
<body>
    <button id="toggleButton">Toggle Highlight</button>
    <p id="text">This is a sample text.</p>

    <script>
        const button = document.getElementById('toggleButton');
        const text = document.getElementById('text');

        button.addEventListener('click', () => {
            text.classList.toggle('highlight');
        });
    </script>
</body>
</html>
```