// define a function with a rest parameter that accept items arguments representing our sandwitch
function makeSandwich(...items:string[]){
    console.log("\nmaking a sandwich with the following items:");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("now enjoy sandwich");
}

// call the fucntion 3 times with 3 diffrent number of arguments
makeSandwich("chicken","cheese","mayo", "egg");
makeSandwich("bread","butter");
makeSandwich("bread","butter","mayo","egg","cheese","chicken","lettuce","tomato");