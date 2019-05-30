// Use the .forEach iterator to loop over the following array of objects 
//and say how delicious each one is.
// The output should be
// > Pizza is very delicious
// > Tacos is mostly delicious
// > Cottage Cheese is not very delicious

 var foods = [
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

foods.forEach(function(current){
  if (current.level === "not very") {
    console.log(current.name + " is " + current.level + " delicious" )
  } else {
    console.log(current.name + " is " + current.level + " delicious" )
  }
})

