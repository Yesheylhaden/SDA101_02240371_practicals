# Developing Design using HTML/CSS
This project involved replicating a given website image for each individual. It was a challenging endeavor that required us to apply our knowledge of HTML, CSS, and Tailwind CSS in various ways to create a responsive and flexible website. Throughout the process, we learned how to effectively utilize different layout techniques, ensure compatibility across devices, and enhance user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgement](#acknowledgement)

### Features
Sure! Here’s an expanded version of your points:

# Responsive Design:
The website is designed to provide an optimal viewing experience across a wide range of devices, including desktops, tablets, and smartphones. This ensures that users can easily access and interact with the site, regardless of the screen size. The layout automatically adjusts to fit different resolutions, providing a seamless experience without the need for horizontal scrolling.

# Built with Tailwind CSS: 
Utilizing Tailwind CSS allows for a modern and aesthetically pleasing layout. Tailwind’s utility-first approach enables rapid prototyping and development, resulting in a clean and visually consistent design. The components are highly customizable, allowing for unique styling while adhering to best practices in web design.

# Comprehensive Company Sections: 
The website includes well-structured sections that provide essential information about the company. These sections cover the company's mission and values, strategic goals, and contact details, offering visitors a thorough understanding of what the company stands for and how to get in touch. This organization not only enhances the user experience but also improves information accessibility.

# User-Friendly Navigation: 
The website features an intuitive navigation system that allows users to easily explore different sections. With clearly labeled menus and a logical flow, visitors can quickly find the information they need. This user-friendly interface is designed to enhance user engagement and satisfaction, ensuring that visitors can navigate the site effortlessly.

## Technologies Used
- HTML5
- CSS
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

## Installation

### For Tailwind CSS
1. **Navigate to Your Project Directory**:
   Open your terminal and change to your project directory:

   ```bash
   cd my-project

2. Check Node.js Version: Ensure you have Node.js installed. You can check your version by running:
     node --version
If Node.js is not installed, download it from Node.js official website and follow the installation instructions for your operating system. 

3. Install Dependencies: Install Tailwind CSS and its dependencies by running:
    npx tailwindcss init -p

4. Initialize Tailwind CSS: Generate the necessary configuration files by executing:
    npx tailwindcss init -p
This creates tailwind.config.js and postcss.config.js files in our project.

5. Set Up Your CSS: Create a CSS file (e.g., styles.css) and include the Tailwind directives:
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

6. Build Your CSS: Add a build script in your package.json under the "scripts" section:
    "scripts": {
    "build": "tailwindcss -i ./styles.css -o ./dist/output.css --watch"
    }

7. Run the Build Process: Start the build process to generate your Tailwind CSS output:
    npm run build

8. Link Your CSS in HTML: Finally, include the generated CSS file in your HTML:
    <link href="/dist/output.css" rel="stylesheet">

### For GitHub
1. Create a New Repository: Go to your GitHub page and create a new repository. Note the repository URL (e.g.,https://github.com/Yesheylhaden/SDA101_CAP3_02240371.git).

2. Set the Remote Repository URL: In your terminal, set the remote URL for your project using:
    git remote set-url origin https://github.com/Yesheylhaden/SDA101_CAP3_02240371.git

3. Push Your Changes: To push your local changes to the main branch on GitHub, run:
    git push --set-upstream origin main

4. Check the Status: Verify the current status of your repository to see if there are any changes:
    git status

5. Push Additional Changes: If you make any additional changes, you can push them to the remote repository with:
    git push

## Usage
To run the project, open the project folder in Visual Studio Code (VSCode). Once inside VSCode, locate the `assg.html` file, right-click on it, and select **Open with Live Server**. This will automatically launch the project in your default web browser, allowing you to view the rendered webpage and see your code in action.

## Features
1. **Responsive Design with Tailwind CSS**: 
   Tailwind CSS helps enhance the styling and responsiveness of the website, ensuring it looks great on all devices. By utilizing utility-first classes, you can quickly adapt the design for various screen sizes.

2. **HTML and Tailwind CSS Foundation**: 
   This project demonstrates the conversion of a visual design (image) into a fully responsive HTML webpage using Tailwind CSS. It showcases how HTML and Tailwind work together to create a modern and functional web experience.

## Technologies
- **HTML**: The standard markup language used for creating the structure of the webpage.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid styling and a clean, modern design.

## Acknowledgment
I would like to express my heartfelt gratitude to my SDA instructor for providing this assignment. It has been an invaluable opportunity for me to learn practical applications of Tailwind CSS and its features in various contexts. Throughout this project, I gained a deeper understanding of Tailwind CSS and its versatile uses.

The journey was not without its challenges; I faced numerous obstacles that at times made me feel like giving up. However, I am immensely grateful to my senior software engineering colleague for their unwavering support and guidance. Their assistance was instrumental in helping me navigate these challenges and ultimately succeed in replicating the company website.

This experience has not only enhanced my technical skills but also reinforced the importance of perseverance and collaboration. Thank you once again for this opportunity!