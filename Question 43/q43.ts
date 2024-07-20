// define the function to show magicians name
function show_magicians(magicians:string[]){
    magicians.forEach(name=> console.log(name));
}


// fucntion to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The great ${name}`)
}

// define an array of magicians name
let magicians_name = ["Harry potter", "Areesha", "Hamzah"]

// Making a copy of original array through .slice() function
let copy_magicians_name = magicians_name.slice()

// modify the copied array to include "The great" with their names
let copy_great_magicians = make_great(copy_magicians_name);

// show both arrays original & copied

// original
console.log("original array\n")
show_magicians(magicians_name);

// copied
console.log("\ncopied array\n")
show_magicians(copy_great_magicians);
