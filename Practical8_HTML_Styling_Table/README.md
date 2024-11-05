# Semester Assignment Grades

This project is a simple HTML table that displays my personal grades for this current semester assignments across various modules. Each row includes details about the module, assignment name, maximum marks, marks obtained, percentage, and grade. This table helps me too keep track of my assignment performance throughout the semester.

## Table of Contents
- [Assignment Question](#assignment-question)
- [Project Overview](#project-overview)
- [Features](#features)
- [Usage](#usage)
- [Customization](#customization)

## Assignment Question
1. Create an HTML table to keep track of your grades throughout the semester. You should list all your modules, assignments, exams, and their respective scores. The table should include the following columns:

Module
Assignment/Exam Name
Maximum Marks
Marks Obtained
Percentage
Grade
Example: Module: "SDA101" - Assignment 1: "Figma Design" - Max Marks: 10 - Marks Obtained: 7 - Percentage: 70% - Grade: B


## Project Overview

This is an HTML project, having a table layout to record and display the grades of assignments. The data is listed row-wise, each data representing a particular assignment of various modules, containing information such as the name of the module, the title of the assignment, maximum and minimum marks obtained, its percentage, and grade. It will be used for educational purposes and personal use. This will be very helpful because it makes reviewing semester performance much easier at a glance.

## Features

- **Module Display**: Shows each module's assignment and respective grades.
- **Grade Calculations**: Calculates and displays the percentage and grade for each assignment.
- **Organized Layout**: Uses a table structure to keep information clear and accessible.

## Usage

1. Open the `index.html` file in any web browser.
2. View the table to see the breakdown of assignments by module, with detailed information on scores, percentages, and grades.

## Customization

To adjust the data in the table:
1. Open `index.html`.
2. Update the rows within the `<table>` tag to reflect any new or modified assignment data.
3. Adjust styles in `grade.css` to modify the appearance or color schemes for specific grades if needed.

## Example
Below is an example row from the table structure:

```html
<tr class="head">
    <td>Sys Admin</td>
    <td>Terminal</td>
    <td>20</td>
    <td>18</td>
    <td>90%</td>
    <td class="A">A</td>
</tr>