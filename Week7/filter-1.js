//  .filter()
//  syntax - entity.filter([what you want to output] => function call)

//entity
let year = [1998, 2007, 1998, 1970, 1989, 2014, 2001]

function getGenZ(birthYear) {
    if (birthYear > 1996 && birthYear < 2012) {
        console.log(birthYear);
    }
}

//  filter() comes in help
const genZ = years.filter(birthYear => getGenZ(birthYear))
//  pass a whole array and filter