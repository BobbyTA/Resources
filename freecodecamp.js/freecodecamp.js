//JavaScript Basics

//Creating comments
//This comment is an in-line comment.
/*This is a multi-line comment*/

/*creating variables
var, let , const
example
var myName(global call)
let myName(local call)
const myName(gives a constant consistent call)
 */

//Storing values with assignment operator
/*   var =a;
     var=7;    new value is var is a with the value of 7

var a;          example of how to
a = 7;          pass the value
var b;          of one variable
b = a;          and make it equal to another
*/

//defining a variable and initializing it to value of 9
// var a =9;

//var myFirstName = "Bobby";         using variable examples to assign them with the string of my name
//var myLastName = "Atkins";


// thisIsExamplesOfVariablesInCamelCase (first word lowercase every word after has an uppercase first character)


/*                                              Else If Examples
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }else if (val<5) {
        return "Smaller than 5"
    }else{
        return "Between 5 and 10"
    }
}
testElseIf(7);

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);


function testSize(num) {
    if(num < 5){
        return "Tiny";
    }else if (num < 10){
        return "Small";
    }else if (num < 15){
        return "Medium";
    }else if (num < 20){
        return "Large";
    }else {
        (num >= 20)
        return "Huge";
    }}

testSize(7);
 */


/*create a function call golf score that takes an array and returns the arguement based on par and strokes
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) {
        return "Hole-in-one!";
    } else if (strokes === 2) {
        return "Eagle";
    } else if (strokes ===3) {
        return "Birdie";
    } else if (strokes ===4) {
        return "Par";
    } else if (strokes ===5 && par ===5){
        return "Par";
    } else if (strokes ===5 && par ===4){
        return "Bogey";
    } else if (strokes ===6 && par ===4){
        return "Double Bogey";
    } else if (strokes ===7 && par ===4){
        return "Go Home!"
    } else if (strokes ===9 && par ===5){
        return "Go Home!";
    }

 */

/*                      creating a switch
function caseInSwitch(val) {
    let answer = "";


    switch(val){
        case 1:
            return  "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return  "gamma";
            break;
        case 4:
            return  "delta";
            break;


            return answer;
    }}
caseInSwitch(1);






function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
case "a":
answer = "apple";
break;
case "b":
answer = "bird";
break;
case "c":
answer = "cat";
break;
default:
answer = "stuff";
}
  // Only change code above this line
  return answer;
}

switchOfStuff(1);



function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 3:
  case 2:
  case 1:
return "Low";
break;
case 6:
case 5:
case 4:
return "Mid"
break;
case 9:
case 8:
case 7:
return "High"
break;
}
  // Only change code above this line
  return answer;
}

sequentialSizes(1);






function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
                    --------------can simplify this same solution to the one below------------
*/


function isLess(a, b) {
  return(a < b)
}

isLess(10, 15);







/*
// SetupModify the function abTest so that if a or b are less than 0 the function will immediately exit
 with a value of undefined.--------------------------------------------------------------------------

*/

function abTest(a, b) {//function takes two parameters a and b
if(a<0 || b<0){ //if statement states if a or b are less than 0 go to return undefined.
return(undefined);
}

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



let count = 0;
//global count variable
function cc(card) {//created function named cc(cardcounting) with the input of card
  // Only change code below this line
  switch(card){//switch statement with the input of card
    case 2:// the first set of case numbers  are the set that will be added
    case 3:
    case 4:
    case 5:
    case 6:
      count++;// count is incremented by 1
      break;//break to separate new case statements for my decrements
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }//next we create a if statement if the count is more than 0 we want to return count + bet and if not we return count + git shold
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


const myDog = {
  // Only change code below this line
  name:"scoobs",
  legs:4,
  tails:1,
  friends: [""]

  // Only change code above this line
};
//created an object with multiple properties

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//example of dot notation in my test

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

//example of using brackets instead of dot notation

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

//example of accessing an objects properties by way of using variables

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
//updating and objects properties outside of an function

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "ruff-ruff";
//adding new properties to an javascript object

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog.tails;

//exercise on deleted an objects property


//turning switch statements into lookup variable
switch(val) {
  case "alpha":
    result = "Adams";
    break;
  case "bravo":
    result = "Boston";
    break;
  case "charlie":
    result = "Chicago";
    break;
  case "delta":
    result = "Denver";
    break;
  case "echo":
    result = "Easy";
    break;
  case "foxtrot":
    result = "Frank";
}
//conversion below

//created the variable lookup with the same properties
var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
};
return lookup[val];


//testing an object for properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
// Only change code above this line
}



//                creating do while loop
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i <= 10);

//replacing loops while in recursion
function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }


  // Only change code above this line
}


//look up profile
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";

  // Only change code above this line
}

lookUpProfile("Akira", "likes");

//generating random fractions
function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}


// generating random whole numbers
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

//generating a whole number within a range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}


//demonstration using parseInt
function convertToInteger(str) {
  return parseInt(str);
}convertToInteger("56");

//using a parstInt with radix
function convertToInteger(str) {

  return parseInt(str,2)}

convertToInteger("10011");


//use conditional ternary operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";


//using Multiple Conditional (Ternary) Operators
  function checkSign(num) {
    return num > 0 ? "positive"
        : num < 0 ? "negative"
            : "zero";
  }

  //Use Multiple Conditional (Ternary) Operators
// Only change code below this line
  function countdown(n) {
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
// Only change code above this line


//Use Recursion to Create a Range of Numbers
  function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }

  function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }

  const s = [5, 7, 2];
  function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
  }
  editInPlace();


  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  const magic = () => {
    return new Date();
  };

  //Use Arrow Functions to Write Concise Anonymous Functions
  const magic = () => {
    return new Date();
  };

  //arrow functions with parameters
  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
// test your code
  console.log(myConcat([1, 2], [3, 4, 5]));