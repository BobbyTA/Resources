"use strict";
// // Your solutions will go here :)
function isString(string) {
    return typeof (string) === "string";
}
//function is string with (string) assigned. we then return typeof
//to produce a boolean if string arguement is equal to "string"



function isNumeric(input){
    return !isNaN(parseFloat(input));
}
//is numeric takes input and returns not (not a number(which is a number)
// and include parse float to account for strings of numbers)



function lowerCase(string) {
    if (!isString(string)) {
        return false;
    }
    return string.toLowerCase();
}

//the first step in this function is to define it. Then we give it the
//input the variable num. then we want the function to say if the variable
//is numeric then return num*2 or else false.


function multiplyBy2(num){
    if (isNumeric(num)){
        return num *2;
    }
    return false;
}

// function multiplyBy2(num) {
//     if (typeof num !== "number") {
//         return false;
//
//     }
//     return num * 2;
//
// }
//

function subtract(num1, num2) {
    return num1 - num2;
}


function getLowestNumber(number1, number2, number3) {
    return Math.min(number1, number2, number3);
    ;
}

function isAllLowerCase(str4) {
    if (str4.toLowerCase() === str4) {
        return true;
    } else {
        return false;
    }
}

function isAllUpperCase(str3) {
    if (str3.toUpperCase() === str3) {
        return true;
    } else {
        return false;
    }
}

function addStringLengths(stringy1, stringy2) {
    return stringy1.length + stringy2.length
}


function calculateChange(totalPaid, totalCost) {
}


function convertHourToSec(hours) {
    let seconds = (hours * 60) * 60;
    return seconds;
}





//function is NOT a palindrome
//for this function the first step was to define the function and insert an
//input (this question the input is string). then we have to spit the strings.
// this turns the strings into arrays of letters from there we reverse the
// array and then put the array back into a string. Finally the last condition
//is met by returning the string to lowercase and making it not equal to the
//joined lowercase string.

function isNotPalindrome(string) {
    let strSplit = string.split("");
    let strReverse = strSplit.reverse();
    let strJoin = strReverse.join("");
    console.log(string.toLowerCase() + " vs " + strJoin)
    // return string !== strJoin;
    return string.toLowerCase() !== strJoin.toLowerCase();
    // console.log(strReverse);
}

//     var i,wLength = string.length-1,wLengthToCompare = wLength/2;
//
//     for (i = 0; i <= wLengthToCompare ; i++) {
//         if (string.charAt(i) != string.charAt(wLength-i)) {
//             return false;
//         }
//     }
//     return true;
// }




//example if (condition){this code will run if condition == true