# Registration Form with Validation

This project contains an HTML-based registration form with basic client-side validation using JavaScript. The form includes fields for username, email, password, and password confirmation. It is designed to validate the input and display error messages where necessary. The form is also styled with an external CSS file.

## Table of Contents:

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [File structure](#file-structure)
- [Usage](#usage)
- [License](#license)

## Project Overview:
In this project, I designed a registration form that possesses client-side validation. It included fields for username, email, password, and confirm password. The text inputs are validated using JavaScript, and error messages will appear on the page for any wrong input of the fields. The submit button is disabled and thus enabled only once after the validity of all inputs. The form is styled using an external CSS file to make it look more attractive. This project helped me to do some practice on how to handle forms and techniques of validation.

## Features:

- **Username Input:** It represents the validation which checks that the username is not empty.
- **Email Input:** Validates the email address entered to be of a legitimate format.
- Password Input: It checks whether the password fulfills certain conditions required.
- **Password Confirmation:** Verify whether the password typed in both the password field and confirmation password field is the same.
- **Button State**: Disable the submit button until all the form fields pass validation.

## Technologies Used:

- **HTML:** Structure of the registration form.
- **CSS:** Styling of the form (linked through `Java.css`).
- **JavaScript:** Form validation logic (contained in `validation.js`).

## File Structure

- `index.html`: The main HTML file containing the registration form.
- `Java.css`: External CSS file for styling the form.
- `validation.js`: JavaScript file containing form validation logic.

## Instructions

1. **Clone the repository** to your local machine or download the files.
2. Open `index.html` in a browser to view the registration form.
3. Fill out the form, and validation will be triggered on the client side:
   - The submit button will only be enabled when all form fields are valid.
   - If any input is invalid, an error message will be displayed below the corresponding field.
4. Customize the CSS and validation logic in `validation.js` if needed.

## How to Use

1. Open the `index.html` file in a browser.
2. Fill out the form fields.
3. Once all fields are valid, the submit button will be enabled, allowing you to submit the form.

## License

This project is open-source and available under the [MIT License](LICENSE).
