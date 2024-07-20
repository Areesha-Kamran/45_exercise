"use strict";
// making a function
function make_shirt(size = "large", printmsg = "I love Typescript") {
    console.log(`you should ${size} size shirt with ${printmsg} prints on shirt`);
}
//    calling a function with by-default values
make_shirt();
//    calling a function now with medium size and default msg
make_shirt("medium");
//    calling a function now with small size and also diffrent print msg
make_shirt("small", "I love javascript");
