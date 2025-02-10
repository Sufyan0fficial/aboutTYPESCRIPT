function reverse__theElements(ele) {
    let reversedArray = [];
    for (let i = ele.length - 1; i >= 0; i--) {
        let element = ele[i];
        reversedArray.push(element);
    }
    console.log(reversedArray);
}
reverse__theElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);
export {};
