const prompt = require("prompt-sync")(); // inbuilt operation that allows user to input values on the terminal
let grossSalary = parseInt(prompt("Gross salary: "));

let nhifDeductions; //variable declaration for nhif deductions
let nssf = 0.06 * grossSalary; //variable declaration for nssf calculations
let paye; //variable declaration for  paye
function nhif(grossSalary) {
  // function responsible for evaluating nhif values
  if (grossSalary <= 5999) {
    return (nhifDeductions = 150);
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    return (nhifDeductions = 300);
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    return (nhifDeductions = 400);
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    return (nhifDeductions = 500);
  } else if (grossSalary >= 15000 && grossSalary <= 19999) {
    return (nhifDeductions = 600);
  } else if (grossSalary >= 20000 && grossSalary <= 24999) {
    return (nhifDeductions = 750);
  } else if (grossSalary >= 25000 && grossSalary <= 29999) {
    return (nhifDeductions = 850);
  } else if (grossSalary >= 30000 && grossSalary <= 34999) {
    return (nhifDeductions = 900);
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    return (nhifDeductions = 950);
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    return (nhifDeductions = 1000);
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    return (nhifDeductions = 1100);
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    return (nhifDeductions = 1200);
  } else if (grossSalary >= 60000 && grossSalary <= 69999) {
    return (nhifDeductions = 1300);
  } else if (grossSalary >= 70000 && grossSalary <= 79999) {
    return (nhifDeductions = 1400);
  } else if (grossSalary >= 80000 && grossSalary <= 89999) {
    return (nhifDeductions = 1500);
  } else if (grossSalary >= 90000 && grossSalary <= 99999) {
    return (nhifDeductions = 1600);
  } else if (grossSalary > 100000) {
    return (nhifDeductions = 1700);
  }

  return nhifDeductions;
}

const nhifValue = nhif(grossSalary);
console.log(`Your NHIF is ${nhifValue}`); // display message of nhif value for the respective gross salary on the console

let netSalary = parseInt(prompt("Gross salary: "));

function netSalaryCalc(grossSalary) {
  // function evaluating the net salary by deducting gross salary with the deductions(nssf & nhif benefits)
  if (grossSalary <= 24000) {
    paye = 0.1 * grossSalary;
    return (netSalary = grossSalary - nssf - nhifDeductions - paye);
  } else if (grossSalary >= 24001 && grossSalary <= 32333) {
    paye = 0.25 * grossSalary;
    return (netSalary = grossSalary - nssf - nhifDeductions - paye);
  } else if (grossSalary >= 32344 && grossSalary >= 50000) {
    paye = 0.3 * grossSalary;
    return (netSalary = grossSalary - nssf - nhifDeductions - paye);
  } else if (grossSalary >= 50001 && grossSalary >= 80000) {
    paye = 0.325 * grossSalary;
    return (netSalary = grossSalary - nssf - nhifDeductions - paye);
  } else if (grossSalary >= 80001) paye = 0.35 * grossSalary;
  return (netSalary = grossSalary - nssf - nhifDeductions - paye);
}

const netSal = netSalaryCalc(grossSalary);
console.log(`Your Net salary is ${netSal}`); //display message of the net salary and value on the console/terminal.
