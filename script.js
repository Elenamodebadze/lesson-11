// // Example one
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus:"active"};

console.log(user.studentstatus);



// //Example two.1
let array1 = ["giorgi", "smith", 25, "passive"];

for (let i =0; i < array1.length; i++) {
  console.log (array1[i])}

// Example two.2
let i = 0;
while (i < array1.length){

  console.log(array1[i]);
  i++;}


//Example three 
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i=0; i < numbers.length; i++){
  if (numbers[i] > 5)

  console.log (numbers[i])
}
  

// Example four

let array = ["html", "css", "bootstrap", "javascript","python"];

for (let y=0; y < array.length; y++) {
  if (array[y].length > 5 && array[y].includes("ava"))
    console.log(array[y]);
  
}


// Example six

let users = {
  name: "giorgi",
  age:  20,
  studentstatus: "active"}

 if (user.age>18 && user.studentstatus==="active") {
   console.log("hello")
 }


if (users.name==="giorgi"){
  console.log("hello giorgi")
}

if(users.studentstatus=="active" || users.age<25){
  console.log ("hello world")
}







