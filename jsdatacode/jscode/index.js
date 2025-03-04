
// let age = prompt("Enter your age");
// console.log(typeof age); //age is of string datatype

// let age1 = prompt("Enter your age:-");
// console.log(typeof age1); //age is of string datatype
// age1 = Number(age1);
// console.log(typeof age1); //age is of number datatype1
const prompt=require("prompt-sync")({sigint:true}); 
// let a = prompt("Hey whats you age?");
// a = Number.parseInt(a);
// console.log(a);
// ----------------------------------------------------------//


// let a = prompt("Hey whats you age?:-");
// a = Number.parseInt(a); // Converting the string to a number
// if(a<0){
//   alert("This is an invalid age");
// }
// else if(a<9){
//   alert("You are a kid and you cannot even think of driving:-");
// }
// else if(a<18 && a>=9){
//   alert("You are a kid and you can think of driving after 18");
// }
// else{
//   alert("You can now drive as you are above 18");
// }
// console.log("Done")
// // HomeWork - Explore switch statement and write a basic program in the comments
// console.log("You can", (a<18? "not drive" :"drive"))

let  num = prompt("what is your age?")
num = Number.parseInt(num)
if(num % 2 == 0 || num % 3 == 0)
{
  console.log("your number is divisible by 2 and 3")
  
}else{
  console.log("your number is not divisible by 2 and 3")
}