"use strict";
//printing Hello World in Greeting Variable
let greeting = "Hello, WOrld !";
console.log(greeting);
//Assign integer values to 2 Variables and perform Arithmetic Operations
let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
let diff = num2 - num1;
let prod = num1 * num2;
let quot = num2 / num1;
console.log("sum : ", sum);
console.log("difference : ", diff);
console.log("produc : ", prod);
console.log("quotient : ", quot);
// Swapping values of two variables without using the third variable
let a = 1, b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log("a : ", a);
console.log("b : ", b);
//create string variable and try to change type
let message = "My name is Muhammad Sufyan";
message = 5; //error bc we cannot change type of variable however value can change of same type
console.log(message);
//Use modulus operator to find remainder 
let firstNum = 10;
let secNum = 5;
let modulus = firstNum % secNum;
console.log("Modulus :", modulus);
// Incremetation with 2 different ways
let counter = 0;
counter++;
console.log("counter ++ :", counter);
counter--;
counter += 1;
console.log("counter +=1 :", counter);
//write logic gates expressions for three boolean variables
let a1 = true;
let b2 = false;
let c3 = true;
let AND_result = a1 && b2 && c3;
console.log("AND result : ", AND_result);
let OR_result = a1 || b2 || c3;
console.log("OR result : ", OR_result);
let NOT_a1 = !a1;
console.log("NOT a1 : ", NOT_a1);
let NOT_b2 = !b2;
console.log("NOT b2 : ", NOT_b2);
let NOT_c3 = !c3;
console.log("NOT c3 : ", NOT_c3);
//Compound Assignment Operators
let number = 10;
number += 5;
console.log("number += 5 :", number);
number -= 5;
console.log("number -= 5 : ", number);
number *= 5;
console.log("number *= 5 :", number);
number /= 5;
console.log("number /= 5", number);
//program to check whether number is even or odd
let numberr = 34;
if (numberr % 2 == 0) {
    console.log(`${numberr}`, " is Even");
}
else {
    (numberr + "is Odd");
}
//Voting eligibility
let voterAGE = 15;
if (voterAGE >= 18)
    console.log("Person is eligible to vote");
else
    console.log("VoterAge : ", voterAGE + " => Person is ineligible to Vote");
//assign grades based on the scored marks
let marks = 50;
if (marks >= 90 && marks == 100)
    console.log("Obtained Grade : A");
else if (marks >= 70 && marks <= 89)
    console.log("Obtained Grade : B");
else if (marks >= 50 && marks <= 69)
    console.log("Obtained Grade : C");
else if (marks >= 33 && marks <= 49)
    console.log("Obtained Grade : D");
else
    console.log("Obtained Grade : F");
//finding marximum of three numbers
let number1 = 43;
let number2 = 22;
let number3 = 5;
if (number1 > number2 && number1 > number3)
    console.log(number1 + " " + "is the maximum");
else if (number2 > number1 && number2 > number3)
    console.log(number2 + " " + "is maximum");
else
    console.log(number3 + "is maximum");
//Checking if given year is leap year
let year = 2024;
if (year % 4 == 0)
    console.log(year + " is a leap year");
else
    console.log(year + " is not a leap year");
// Farenheit to Cleceius Converter
let farenheit = 100;
let celsius = ((5 / 9) * (farenheit - 32));
console.log(`${farenheit}F = ${celsius}C`);
// Determining sign of a number
let num_ = 0;
if (num_ > 0)
    console.log(`${num_} is +ive`);
else if (num_ < 0)
    console.log(`${num_} is -ive`);
else
    console.log(`${num_} is 0`);
//Multiplication Table of Given number
let numBer = 345;
console.log(`${numBer} * 1 = `, numBer);
console.log(`${numBer} * 2 = `, numBer * 2);
console.log(`${numBer} * 3 = `, numBer * 3);
console.log(`${numBer} * 4 = `, numBer * 4);
console.log(`${numBer} * 5 = `, numBer * 5);
console.log(`${numBer} * 6 = `, numBer * 6);
console.log(`${numBer} * 7 = `, numBer * 7);
console.log(`${numBer} * 8 = `, numBer * 8);
console.log(`${numBer} * 9 = `, numBer * 9);
console.log(`${numBer} * 10 = `, numBer * 10);
