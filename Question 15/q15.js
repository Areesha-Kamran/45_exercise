"use strict";
// guest array
let guestArray = ["Hareem", "Areesha", "Humaira"];
// can't come
let canNotAttend = "Hareem";
console.log(`${canNotAttend} can not make it,to dinner`);
// invite newGuest
let newGuest = "Kamran";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// send msg
guestArray.map((items) => console.log(`Hello ${items}, you are invited to dinner`));
