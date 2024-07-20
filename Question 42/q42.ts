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


// call make_great function to modify magicians names
let great_magicians = make_great(magicians_name)

// call show_magicians that show modified list of magicians
show_magicians(great_magicians)
