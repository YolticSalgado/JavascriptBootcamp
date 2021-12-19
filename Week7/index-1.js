// An example of callback function to sort an array - increasing or decreasing
let numbers = [456, 98, 65, 235, 9 ,56];

//sorting is our callback function
function sorting (array) {
    let sorted = array.sort(
        function(a,b) {
            return b-a;     //decreasing order
        }
    );
    console.log(sorted);
}

//use: call a function inside a function , declaration is included

function addNumber(array, callBack) {
    array.push(4325);
    console.log(array);
    callBack(array) //takes the same parameter
}

addNumber(numbers, sorting)