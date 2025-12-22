# RotateNav - Rotating Navigation Component

## Core Functionality

Click the circular button at the top-left corner to rotate the entire page by -20 degrees and reveal the navigation menu sliding in from the left.

## Code Implementation

### JavaScript
Toggle the `show-nav` class to control visibility:

```javascript
open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
```

### CSS Animations

**Page Rotation**:
```css
.container.show-nav {
  transform: rotate(-20deg);
}
```

**Circle Button Rotation**:
```css
.container.show-nav .circle {
  transform: rotate(-70deg);
}
```

**Navigation Menu Slide-in**:
```css
nav ul li {
  transform: translateX(-100%);  /* Initially hidden */
}
.container.show-nav + nav li {
  transform: translateX(0);  /* Visible */
}
```

## File Structure

- `index.html` - HTML structure
- `script.js` - Toggle functionality
- `style.css` - Styles and animations

