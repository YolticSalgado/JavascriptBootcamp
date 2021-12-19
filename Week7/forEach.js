//  faster for loop
//  more efficient

//  syntax - entity.forEach([what you want to output] => functuin call)

let colors = ['red', 'blue', 'purple', 'aquamarine', 'teal', 'yellow'];

function showColors(color) {
    console.log(color);
}

colors.forEach(color => showColors(color))