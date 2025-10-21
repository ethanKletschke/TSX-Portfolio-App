# Ethan K.'s TypeScript Portfolio

A TypeScript React app used as my portfolio

- Author: Ethan Kletschke
- Version: `0.22.0`
- Environment(s): Ubuntu (WSL)
- License: Modified MIT (See below)

As of version 0.22.0, this project is licensed under a modified MIT License that prohibits AI training.
Previous versions remain under the standard MIT License.

## Using the App

### Requirements to Run

- NPM v22 and above

### Installation

- Clone the repository.
- Use `cd` to go to the repository folder
- Run `npm install` to download all the dependencies.

### Running the App

- For the heavily tested "dev" version:
  - Run `npm run dev` in the project folder.

- For the (currently untested) production version:
  - Run `npm run build` to build the production version of the app.
  - Run `npm run preview` to run the production version.

## Pages

### About Me

A page discussing me and my confidence in my skills.

### Consecutive Summation

On this page, you can input a number to add to a previous number (starting at 0)
with each button press, and you can optionally add a "step" (how many times
to add the same number).

### Custom Email Validator

On this page, you can validate an entered email address, and the app will automatically
validate the email as you type it using a custom RegExp instead of the built-in browser
validator.

### Sentence Sorting

On this page, you can enter a sentence, and the program will sort it by its individual letters.

### Dice Roll

When you click on a button, rolls the die, and displays averages and totals for your
rolls!

### Object Sort (WIP)

Input four text values, store it internally as an object, and sort the objects
by one of the four text values.

### Hash Map Responses (WIP)

A hash map with predefined values which uses "response codes" to
output information (subject to heavy changes).
