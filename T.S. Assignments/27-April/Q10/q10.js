const count = (numbers) => {
    let posititve__Nos = 0;
    for (let no of numbers) {
        if (no > 0) {
            posititve__Nos++;
        }
    }
    console.log("Total positive no.s in the array are : ", posititve__Nos);
};
count([1, -8, 44, -50, 7, 39, 0, 50]);
export {};
