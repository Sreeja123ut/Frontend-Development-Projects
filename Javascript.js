/*var lbs = prompt("Please enter the pounds")
alert("The" + " " + lbs +" "+"in kg is" +" " + lbs*0.45)
console.log("You are cool person!")*/

/* var hot = false;
var temp = 100;

if (temp < 90) {
hot = true;
}

console.log(hot); */

/*var hot = true;
var temp = 100;

if (temp < 75) {
  console.log("It's not hot")
}
else {
  console.log("It's damn hot outside!")
} */


/*var hot = true;
var temp = 100;

if ("temp > 90") {
  console.log("Uff! Yes it is" + " " + hot)
}
else if (temp > 50 && temp <= 90) {
  console.log("It's a average temprature")
}
else if (temp < 50 &&  temp <= 30) {
  console.log("The temprature is managable")

}
else{
  console.log("It's too cold")
} */

/*var ham = 10;
var cheese = 10;
var report = " ";

if (ham >= 10 && cheese >=10) {
  report = "The sales is going well!";
}
else if (ham <= 10 || cheese >= 10) {
  report = " The sales are going pitty okay";
  }
  else {
    report = " Sales are down";
  }
console.log(report);*/

/*var word = "Hello";

 for (var i=0;i<5;i++){
 console.log(word)
}*/

/*var a = 0;
while (a<5) {
a +=1;
console.log("Hello");
}*/


/*for (var i =0; i<26; i++) {
if (i%2!==0) {
  console.log(i)
}}*/

/*var a = 0;
while(a < 26) {
  a = a+1;
  if (a%2!==0)
  {
  console.log(a)
}} */


/*var firstname = prompt("Enter your firstname:");
var lastname = prompt("enter the last name:");
var age = prompt("enter the age:");
var petname = prompt("what's your pet name?");
var height = prompt("What's the age height?");
alert("Thanks for entering all the details");

var namecon = null;
var agecon = null;
var heightcon = null;
var petcon = null;

if (firstname[0] === lastname[0]) {
  namecon = true;
}
else {
  namecon = false;
}

if (petname === 'y') {
  petcon = true;
}else {
  petcon = false;
}if (age >= 20 && age < 30) {
  agecon = true;
}else {
  agecon = false;
}if (height <= 140) {
  heightcon = true;
}else {
  heightcon = false;
}if (namecon && agecon && heightcon && heightcon )
{
  console.log("Awseome great job!. All details are correct");
}
else {
  console.log("Oops! Information is wrong");
} */

//Problem 1:

//Write a function called sleepIn that takes in two boolean parameters: weekday
// and vacation.
//
// The parameter weekday is true if it is a weekday, and the parameter vacation is
// true if we are on vacation. We sleep in if it is not a weekday or
// we're on vacation. Return true if we sleep in. So some example input and output:
//
// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

/*function sleepIn(weekday, vacation)
{
  return (!weekday||vacation)
}*/

//
// PROBLEM 2: MONKEY TROUBLE
//
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if
// each is smiling. We are in trouble if they are both smiling or if neither of
// them is smiling. Return true if we are in trouble.
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

/*function monkeyTrouble(aSmile,bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile )
}*/


// PROBLEM 3: STRING TIMES
//
// Given a string and a non-negative int n, return a larger
// string that is n copies of the original string.
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
  var i = 0;
  var returnStr = " ";
  while (i < n) {
    returnStr += str;
    i++;
  }
    return returnStr;
  }

  //OR
function stringTimes(str, n) {
  returnStr = ""
  for (var i = 0; i<n;i++){
    returnStr += str
  }
return returnStr;
}
// Given 3 numerical values, a b c, return their sum. However, if one of the values is
// 13 then it does not count towards the sum and values to its right do not count.
// So for example, if b is 13, then both b and c do not count.
//
// Hint (Explore using multiple return statements inside a single function!)
//
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a,b,c) {
  if(a===13){
    return b+c;
  }
  else if (b===13) {
    return a+c
  }
  else if (c===13) {
    return a+b
}
else {
  return a+b+c
}}
function luckySum(a,b,c) {
  if(a===13){
    return 0
  }


// PROBLEM 5:
//
// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0

function caught_speeding(speed,birthday )
{
if( speed <= 60)
{
return 0;
}
else if (speed >61 && speed <=80)
{
  return 1;
}
else
{
return  2;
}
}
