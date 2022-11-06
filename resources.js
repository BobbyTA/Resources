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