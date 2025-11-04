# Ethan K.'s TypeScript Portfolio

A TypeScript React app used as my portfolio

- Author: Ethan Kletschke
- Version: `0.24.0`
- Development Environment: Ubuntu (WSL)
- Technologies used:
  - NPM
  - Node.js
  - React (TypeScript)
  - Vite
- License: Modified MIT (See below)

As of version 0.22.0, this project is licensed under a modified MIT License that prohibits AI training.
Previous versions remain under the standard MIT License.

## Table of Contents

- [Ethan K.'s TypeScript Portfolio](#ethan-ks-typescript-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Using the App](#using-the-app)
    - [Requirements to Run](#requirements-to-run)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
  - [Pages](#pages)
    - [About Me](#about-me)
    - [Consecutive Summation](#consecutive-summation)
    - [Custom Email Validator](#custom-email-validator)
    - [Sentence Sorting](#sentence-sorting)
    - [Dice Roll](#dice-roll)
    - [Object Sort (WIP)](#object-sort-wip)
    - [Dialog Box Demo](#dialog-box-demo)

## Using the App

### Requirements to Run

- NPM v22 and above

### Installation

1. Clone the repository.
2. Use `cd` to go to the repository folder
3. Run `npm install` to download all the dependencies.

### Running the App

For the heavily tested "dev" version:

1. Run `npm run dev` in the project folder.

For the (currently untested) production version:

1. Run `npm run build` to build the production version of the app.
2. Run `npm run preview` to run the production version.

## Pages

### About Me

A page discussing me and my confidence in my skills. The skills are displayed as a
meter from 1% to 100%.

### Consecutive Summation

On this page, you can input a number to add to a previous number (starting at 0)
with each button press, and you can optionally add a "step" (how many times
to add the same number).  
For example, setting the number as 2 and the step as 2 will add 4 to the number. 

The formula is as follows:

$$
val = val + (new \times step) 
$$

Where:

- "`val`" is the current value (initially 0).
- "`new`" is the number the user provided.
- "`step`" is the step provided by the user.

### Custom Email Validator

On this page, you can validate an entered email address, and the app will automatically
validate the email as you type it using a custom RegEx instead of the browser's built-in
`email` input validator.

### Sentence Sorting

On this page, you can enter a sentence, and the program will sort that sentence
by its individual letters (case- and accent-insensitive).  
For example, `Letters` would be sorted as `eeLrstt`.

### Dice Roll

When you click on a button, rolls the die, and displays the die face, along with
averages and totals for your roll streak.

### Object Sort (WIP)

Input four text values, store it internally as an object, and sort the objects
by one of the four text values.

### Dialog Box Demo

A small page demonstrating fully-styled dialog boxes of 3 types:

1. Alert Box  
   - A box with a short message and an "OK" button.
2. Confirm Box
   - A box with a short confirmation message, along with "Yes" and "No" buttons. 
3. Form Box
   - A confirm box with a simple form.
