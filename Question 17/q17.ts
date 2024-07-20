// guest array
let guestArray:string[] =["Hareem","Areesha","Humaira"];

// can't come
let canNotAttend:string = "Hareem";


// invite newGuest
let newGuest :string = "Kamran";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

guestArray.unshift("Kanza");


let middleGuest:string = "Wadood";
let middleIndex = guestArray.length/2
guestArray.splice(middleindex,0,middleGuest)

guestArray.push("Vaneeza");
console.log(guestArray)
console.log("We can invite only two people");

while(guestArray.length>2){
let removeguest = guestArray.pop();
console.log(`\nsorry! ${removeguest} we can't invite you on dinner`);
};

guestArray.map((item)=> console.log(`\n${item} you are still invited!`));
guestArray.pop();
guestArray.pop();
console.log(guestArray)



