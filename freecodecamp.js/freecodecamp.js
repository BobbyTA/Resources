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

function abTest(a, b) {
if(a<0 || b<0){
return(undefined);
}

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);



let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


