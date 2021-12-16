// Code your solutions in this file
function writeCards(arr) {
    const newArr = [];
    arr.forEach(element => newArr.push("Thank you, " + element + ", for the wonderful surprise gift!"));
    return newArr;
}

function countDown(num) {
    let count = num;
    while (count > -1) {
        console.log(count);
        count--;
    }
}
