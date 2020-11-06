// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
//var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var studentRoster = [];

function newadd(){
  var name = prompt("enter the item you want to add?");
  studentRoster.push(name);
  }

function remove(){
  var rename = prompt("enter the item that you want to remove?");
  var index = studentRoster.indexOf(rename);
  studentRoster.splice(index,1);
  }

function display(){
  console.log(studentRoster);
}

var a = prompt("What to use our web page?")
request ="empty";
if(a === 'y'){
  while(request!=="quit"){
    var request = prompt("you wanna add, remove,display or quit?")
    if(request==='add'){
      newadd();
      }else if (request==='remove') {
  remove();
  }else if (request==='display') {
  display();
   }
 }
}
alert("Thanks for using the Web App! Please refresh the page to start over.")
