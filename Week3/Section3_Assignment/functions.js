//anonymous function
(function (sentence) {
    let arrayOfWords = sentence.split(" ");
    console.log(arrayOfWords);
}) ("Hello my name is Sanhita");

//(function def) (parameter)


// how to use fat arrows to declare functions
// function def into a variable 

let creatingLoops = (x) => {
    for(let i=0; i<x; i++) {
        console.log(i);
    }
}

creatingLoops(5);
// let varname = (parameter) => {func def}
