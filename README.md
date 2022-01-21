# Factors of an Integer

According to [Wikipedia](https://en.wikipedia.org/wiki/Factor), a factor is a term in multiplication for a whole number in which a larger whole number can be divided.  For example, the number 6 has factors of 1, 2, 3 and 6.  The aim is to investigate these numbers using HTML Forms.

## UX

**Getting Started**

Enter a whole number between 1 and 10000 (e.g. 6) and then click on the Submit Button.  You will see the number you have entered and their factors (including 1 and the number itself).  Click on the Reset Button to clear the information.

**User Stories**

As a user, if I do not enter anything I get the error message `Invalid input.  Please enter a whole number between 1 and 10000.`.

This also applies if I enter text (e.g. cat), a number that is not an integer, a number less than 1 or greater than 10000.

As a user, assuming that my input is valid, I should get the following:

    You have entered the number 6.
    Its factors: 1,2,3,6.

As a user, I can clear the information, by clicking on the Reset Button.

**Information Architecture**

The number is an integer beteen 1 and 10000.  The factors are positive integers between 1 and 10000 and are in array form.

## Features

Validation of Numeric Input.  Allows the user to enter a number to obtain its factors.  This includes 1 and the number itself.

## Technologies

Uses HTML5, CSS3, Bootstrap 5.1.3, Google Fonts and JavaScript.

## Testing

Make sure all the user stories have been met.

## Deployment

On [GitHub Pages](https://derektypist.github.io/factors-of-an-integer) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [FreeCodeCamp](https://www.freecodecamp.org)