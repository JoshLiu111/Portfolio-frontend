# ProgressBar - Progress Steps Component

## Core Functionality

A multi-step progress indicator with Next/Prev buttons. Click Next to advance through steps or Prev to go back. The progress bar fills dynamically based on the current step, and buttons are disabled at the first/last step.

## Code Implementation

### JavaScript
Tracks the current active step and updates circles and progress bar:

```javascript
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  
  // Enable/disable buttons
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
```

### CSS Animations

**Progress Bar**:
```css
.progress {
  width: 0%;  /* Starts at 0% */
  transition: 0.4s ease;
}
/* Width is dynamically set via JavaScript */
```

**Active Circle**:
```css
.circle {
  border: 3px solid var(--line-border-empty);  /* Default: gray */
}
.circle.active {
  border-color: var(--line-border-fill);  /* Active: blue */
  color: var(--line-border-fill);
}
```

**Button States**:
```css
.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed;
}
```

## File Structure

- `index.html` - HTML structure with 4 step circles
- `script.js` - Step navigation logic
- `style.css` - Progress bar and circle styling

