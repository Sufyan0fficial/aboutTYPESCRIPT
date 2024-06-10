//Print Hello world !
let greeting : string = "Hello, World !";
console.log(greeting);

//Mathematical Operations on 2 variables storing integer variables
let var1:number= 79;
let var2:number=43;
console.log(` ${var1} + ${var2} = `, var1+var2 ,`\n`,
    `${var1} - ${var2} = `, var1-var2 ,`\n`,
    `${var1} * ${var2} = `, var1*var2,`\n`,
    `${var1} / ${var2} = `, var1/var2,
)

//Swapping values of 2 variables without using third variable
let a : number = 1;
let b : number = 2;
a=b;
b=b-1;
console.log(` a = `,a,`\n`,`b = `,b);

//Changing String variable to some other type
let message : string = "Hello , Muhammad Sufyan";

//Find the remainder of 2 numbers using modulus operator
let num1:number = 54;
let num2:number = 23;
console.log(`${num1} % ${num2} = `,num1 % num2);

//Incremet varable value by 1 
// => METHOD # 01
let counter = 0;
counter++;
console.log(`counter++ = `,counter);

// =>Method # 2
counter+=1;
console.log(`counter+=1 = `,counter);

//Logic Gate expressions for 3 Boolean Variables 
let a1 = true;
let a2 = false;
let a3 = true;
let AND_oper = a1 && a2 && a3;
console.log(`AND OPERATION = `,AND_oper);
let OR_oper = a1 || a2 || a3;
console.log(`OR Operation = `, OR_oper);
let NOT_oper1 = !a1;
console.log(`!a1 = `,NOT_oper1);
let NOT_oper2 = !a2;
console.log(`!a2 = `,NOT_oper2);
let NOT_oper3 = !a3;
console.log(`!a3 = `,NOT_oper3);

//Compound Assignment Operation 
let num = 64;
num+=6;
console.log(`num+=6 : `,num);
num-=6;
console.log(`num-=6 : `,num);
num*=6;
console.log(`num*=6 : `,num);
num/=6;
console.log(`num/6 : `,num);


//Program to check wheterh number is EVEN OR ODD
let number1 = 0;
if(number1 % 2 === 0) {
    console.log(`${number1} is Even`);
}
else 
console.log(`${number1} is ODD`);

//Voting eligibility Checker

let userAge = 18;
if (userAge>=18) {
    console.log("Eligible to voten :)");
}
else 
console.log("Ineligible to vote :(");

//Grading system based on marks scored 
let marks = 0;
if (marks >=85 && marks<= 100 ) {
    console.log("Obtained Grade : A");
}
else if (marks >= 70 && marks < 85){ 
    console.log("Obtained Grade : B");
}
else if (marks >= 50 && marks < 70){ 
    console.log("Obtained Grade : C");
}
else if (marks >= 32  && marks < 50){ 
    console.log("Obtained Grade : D");
}
else if (marks < 32 && marks >= 0){ 
    console.log("Obtained Grade : F");
}
else 
console.log("Entered Marks are INVALID");


//Maximum of three numbers
let x = 1;
let y = 45;
let z = 3;
if (x > y && x > z) {
    console.log(`${x} is greates of ${y} & ${z}`)
}
else if (y > x && y > z) {
    console.log(`${y} is greates of ${x} & ${z}`)
}
else {
    console.log(`${z} is greates of ${x} & ${y}`)
}


// Leap year checker 
let year = 2024;
if (year % 4 === 0) {
    console.log(`${year} is leap year`)
}


// Farenhite to Celcius Converter

let Farenhite = 103;
let celcuis = (5/9)*(Farenhite-32);
console.log(`${Farenhite} Farenhite = `, celcuis);


//Checking if number is +,- or 0
let number2 = -7493579;
if (number2 > 0 ) {
    console.log(`${number2} is positive`)
}
else if (number2 < 0) {
    console.log(`${number2} is negative`)
}
else if (number2 === 0) {
    console.log(`${number2} is zero`)
}


//Multipliation Table of given number upto 10
let number3 = 574;
for (let i =1 ; i<=10; i++) {
    console.log (`${i} * ${number3} = `,i*number3 );
}