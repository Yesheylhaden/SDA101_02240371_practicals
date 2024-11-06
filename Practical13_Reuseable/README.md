# Reusable Card Component

It is a simple reusable card component that displays basic information for profiles, such as a title, name, subtitle, and description. I have added an image, background image, and a button to make every card more interactive.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [License](#license)

---

### Overview

This is a simple HTML/CSS/JavaScript layout that uses reusable card components for profiles, team members, etc. Each of these cards represents a person with a profile image, a background, and an informative button.

### Features

- **Reusable Card Layout**: Allows the addition of multiple profile cards in consistent design.
Image Support: Each card is able to display a background and profile picture.
- **Dynamic Interaction**: JavaScript function to show more information with the use of a button.

### Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling for the card components.
- **JavaScript**: Functionality for the "More Info" button interaction.

### Project Structure

```
├── index.html         # Main HTML file with card layout
├── style.css          # CSS file for styling the cards
├── script.js          # JavaScript file for interactivity
├── images             # Folder containing images (background and profile images)
└── README.md          # Documentation file
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Yesheylhaden/reusable-card-component.git
   cd reusable-card-component
   ```

2. **Open `index.html` in a web browser**:
   - Simply double-click `index.html`, or open it with a code editor that has live preview functionality.

### Usage

1. **Add New Cards**: All card elements have the same structure. Adding a new card should be done by duplicating the `div.card` structure in the HTML file.
2. **Change the Card Contents**: Replace `card-title`, `card-subtitle`, `card-text` with the ones you want, and every other image source path if you see fit.
3. **JavaScript Functionality**: The button has an on-click event that triggers the `showMoreInfo` function and therefore can be extended according to the need.

### Customization

- **Styling**: Modify `style.css` to adjust colors, fonts, and layout.
- **JavaScript Interaction**: Update `script.js` to add more complex interactions or information display.

### Example

Here’s an example of how to add a new card component:

```html
<div class="card">
  <div class="card-header">
    <h2>Department Name</h2>
  </div>
  <div class="card-content">
    <img id="background" src="path/to/background.jpg" alt="backgroundpic">
    <img class="card-img" src="path/to/profile.jpg" alt="Profile" style="width: 50%;">
    <h3 class="card-title">Name</h3>
    <p class="card-subtitle">Job Title</p>
    <p class="card-text">Department Info</p>
  </div>
  <div class="card-footer">
    <button onclick="showMoreInfo('Name')">More Info</button>
  </div>
</div>
```

### License

This project is open source and available under the MIT License.
