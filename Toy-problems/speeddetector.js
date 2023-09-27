const prompt = require("prompt-sync")(); // prompt user to input values in the terminal
let Speed = parseInt(prompt("Speed Output: "));
let demeritPoint;
function speedDetector(Speed) {
  if (Speed <= 70) {
    //if else statements that evaluate the respective return values of certain values input
    return (demeritPoint = "ok"); // Output message for values of 70 and below
  } else if (Speed >= 71) {
    let n = Speed - 70;
    let points = Math.floor(n / 5); // math function that calculates the number of points generated after inputing the speed
    if (points > 12) {
      return (demeritPoint = "License suspended"); // demerit message for users moving way past the speedlimit
    }
  }
  return demeritPoint;
}
const sp = speedDetector(Speed);

console.log(`Your Demerit Point : ${sp}`); // display message on the console/ terminal
