"use strict";
// guest array
let guestArray = ["Hareem", "Areesha", "Humaira"];
// can't come
let canNotAttend = "Hareem";
// invite newGuest
let newGuest = "Kamran";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log("Welcome all we found a bigger table");
guestArray.unshift("Kanza");
let middleGuest = "Wadood";
let middleindex = guestArray.length / 2;
guestArray.splice(middleindex, 0, middleGuest);
guestArray.push("Vaneeza");
guestArray.map((item) => console.log(`\ndear ${item} you are invited to dinner!`));
