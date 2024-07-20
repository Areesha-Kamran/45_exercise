"use strict";
// array of current users
let current_users = ["Areeba", "Rauf", "Ambreen", "Saqib", "Areesha"];
// array of new users
let new_users = ["Humaira", "Ambreen", "Areesha", "Vaneeza", "Kanza"];
// loop through new_users to check for username avalibility
new_users.forEach(new_one_user => {
    // making a condition for username that already exits and save in our_condition variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_user.toLowerCase());
    // print diffrent msgs through if-else statements
    if (our_condition) {
        console.log(`Sorry! ${new_one_user} is alread taken`);
    }
    else {
        console.log(`This username ${new_one_user} is available`);
    }
});
