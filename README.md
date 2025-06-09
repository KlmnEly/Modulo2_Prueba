# Kelmin Miranda Portfolio

This is my personal portfolio, i am a software developer passionate about web technologies, including PHP, MySQL, HTML, CSS, and JavaScript.

This README explains the structure and design of the website, focusing on the key CSS decisions that make the portfolio responsive, modern, and user-friendly.

---

## Key Features and Structure of the CSS

### Layout and Flexibility with Flexbox and Grid

The portfolio layout relies heavily on **Flexbox** and **CSS Grid** for creating responsive, flexible layouts that adapt across different screen sizes.

#### Flexbox in Action:
- The main container (`body`) is a flex container, ensuring that all sections of the page are stacked vertically.
- The header navigation (`.header-nav`) uses **Flexbox** to center the navigation links and space them evenly.

```
.header-nav {
    display: flex;
    justify-content: space-around;
}
```
  
* CSS Grid for Main Content Layout:
The index-about-me section uses CSS Grid to create a two-column layout for the profile image and description. This makes the profile section responsive and easy to adapt on different screen sizes.

Example:

```
.index-about-me {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    place-items: center;
}
```

### Hover Effects for Interactivity
Interactivity is a key aspect of the design. Several hover effects are included to make the site more engaging and responsive.

#### Hover Effects for Links:
* Navigation links and social media icons change color when hovered to indicate interactivity.

Example:

```
.header-nav a {
    transition: .5s;
    &:hover {
        color: rgb(0, 225, 255);
    }
}
```
### Hover Effects for Projects:
* The project cards are interactive, scaling up when hovered to give the user a sense of clickable elements.

Example:

```
.project:hover {
    scale: 1.1;
    cursor: pointer;
}
```
### Responsive Design
The site adapts well to different screen sizes using media queries.

#### Adjusting Layouts for Smaller Screens:
* For screens smaller than 768px, the profile section becomes a single column, and the technologies section displays vertically rather than horizontally.

Example:

```
@media (max-width: 768px) {
    .index-about-me {
        grid-template-columns: 1fr;
    }
}
```

* The footer layout also adjusts, stacking sections vertically on smaller screens for better readability and usability.

#### Full Mobile Optimization:
* For screens smaller than 480px, elements like the profile image and social media icons are resized to fit the smaller viewport.

Example:

```
@media (max-width: 480px) {
    .perfil-image img {
        width: 100%;
    }
    .social-nav {
        flex-direction: row;
    }
}
```

### Animation for Visual Appeal
* Keyframe animations are used to enhance user experience and add dynamic elements to the page.

#### Arrow Animation:
* The arrow icon at the bottom of the page uses an animation to pulse in size, drawing the user’s attention to the next section.

Example:

```
@keyframes arrow {
    0% {
        scale: 1;
    }
    50% {
        scale: 1.5;
    }
}
```

### Footer Design
The footer is divided into three sections for contact, social media links, and location. This organization keeps the content clear and accessible.

* The social media links are interactive with hover effects that scale the icons and make them visually appealing.

* The contact form is styled to ensure that the input fields and buttons stand out, and the submit button has a smooth hover effect that changes the background color.

Example:

```
.contact button {
    transition: .5s;
    &:hover {
        background: rgb(0, 225, 255);
    }
}
```
### Map Embedding
* The location section in the footer uses an embedded Google Map with customized styling for a rounded corner effect.

Example:

```
.footer-map iframe {
    border-radius: 15px;
    width: 100%;
    height: 80%;
}
```