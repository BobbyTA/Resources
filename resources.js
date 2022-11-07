//Data types are Strings , Numbers, Boolean, Null, Undefined

//variables are set by var, let, const

//arrays multi lined comments with that holds multiple values

function isEven(){
    //switch(input):
    case 2:
        return true
    case 3:
        return true
}


//                         creating while loop that begins at 5 and decends.
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while(i >= 0) {
    myArray.push(i);
    i--;
}


//                             creating for loop that loops through values 1-5

// Setup
const myArray = [];

// Only change code below this line
for (let i= 1; i< 6; i++){
    myArray.push(i);
}

//                         for loop that pushes odd numbers between 1-9 out counting up
// Setup
const myArray = [];

// Only change code below this line
for(let i =1; i < 10; i += 2){
    myArray.push(i)
}
//                                another example counting down
// Setup
const myArray = [];

// Only change code below this line
for(let i = 9; i > 0; i -=2){
    myArray.push(i)
}
//                   interating through an array with an for loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}



//          nesting for loops example
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//          creating an do while loop
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
    myArray.push(i);
    i++;
} while (i <= 10);