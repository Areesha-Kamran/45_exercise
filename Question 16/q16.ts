// guest array
let guestArray:string[] =["Hareem","Areesha","Humaira"];

// can't come
let canNotAttend:string = "Hareem";


// invite newGuest
let newGuest :string = "Kamran";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;


console.log("Welcome all we found a bigger table");
guestArray.unshift("Kanza");


let middleGuest:string = "Wadood";
let middleindex = guestArray.length/2
guestArray.splice(middleindex,0,middleGuest)

guestArray.push("Vaneeza");

guestArray.map((item)=> console.log(`\ndear ${item} you are invited to dinner!`));



