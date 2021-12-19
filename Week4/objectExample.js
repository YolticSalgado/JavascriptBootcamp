const car1 = {
    name: "ef",
    color: "blue",
    price: 400,
    stuff: "banana"
};

const car2 = {
    name: "erge",
    color: "red",
    price: 200,
    stuff: "apple"
};

const car3 = {
    name: "ergedc",
    color: "green",
    price: 500,
    stuff: "peach"
};

console.log(car3.color);

car3.color = "purple";

console.log(car3.color);

let carCollection = {

    car1,car2

};

carCollection.push(
    
    {
        name: "vrvf",
        color: "black",
        stuff: "pencil"
    }

);

console.log(carCollection[1].color);