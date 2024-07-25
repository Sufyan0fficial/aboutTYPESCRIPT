//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

type uniontype = number | string;

let favNo: uniontype = 5;
favNo = `My favourite No. is ${favNo}`;
console.log(favNo);
