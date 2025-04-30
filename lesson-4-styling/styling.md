# Notes on CSS and Its Interaction with JavaScript and HTML


# CSS and what it is
- **CSS (Cascading Style Sheets)** is a stylesheet language used to describe the presentation of a document written in HTML
- CSS controls the layout, colors, fonts, and overall visual appearance of a webpage.
- it uses curly braces `{}` to define rules and properties.
- CSS rules consist of a **selector** (the HTML element to be styled) and a **declaration block** (the styles to apply).
- Example:
```css
h1 {
    color: blue;
    font-size: 24px;
}
```
- **Selectors** can target elements by:
    - Type: `h1`, `p`
    - Class: `.class-name`
    - ID: `#id-name`
    - Attribute: `[type="text"]`
    - Pseudo-classes: `:hover`, `:first-child`

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



