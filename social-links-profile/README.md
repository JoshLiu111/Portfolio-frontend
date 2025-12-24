# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS).

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./public/Screenshot%20.png)

### Links

- Live Site URL: [Check](https://portfolio-frontend-82dr.vercel.app/)

## My process

### Built with

- Designed by Figma
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I Learned

**Reading and Translating Figma Designs into Code**

I deepened my understanding of how to translate Figma designs into responsive web layouts, especially for mobile and tablet. I learned that width values in Figma should not be copied mechanically into CSS. Instead, they need to be interpreted in terms of parent–child container relationships.

At the layout level, responsive breakpoints are driven by parent containers (such as page frames at 375, 768, and 1440), where `@media` rules mainly handle changes like padding, layout flow, and alignment. Child components, including cards and text containers, usually rely on `width: 100%` and `max-width` rather than fixed widths, allowing them to adapt naturally to available space.

This helped me understand that many widths shown in Figma—especially on mobile—are often the result of parent container constraints, not values that should be hard-coded. By focusing on layout intent instead of absolute numbers, I can design cleaner, more maintainable responsive CSS.

## Author

- Website - [Add your name here](https://my-portfolio-frontend-kappa-lemon.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/JoshLiu111)
