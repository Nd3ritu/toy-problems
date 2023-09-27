const prompt = require("prompt-sync")(); // inbuilt operation that allows user to input values on the terminal

let n = parseInt(prompt("Input marks: "));
let grade;
function studentGrade(n) {
  // function responsible to calculate the grade of students
  if (n > 79) {
    // if else statements that output the grade of a student respective of their input marks
    grade = "A";
  } else if (n >= 60 && n <= 79) {
    grade = "B";
  } else if (n >= 49 && n <= 59) {
    grade = "C";
  } else if (n >= 40 && n <= 49) {
    grade = "D";
  } else if (n < 40) {
    grade = "E";
  }

  return grade;
}

const graded = studentGrade(n); //variable name for the function studentGrade
console.log(`Your grade is ${graded}`); // display message on the console
