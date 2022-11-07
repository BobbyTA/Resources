//negative function
function rv(input){
    return input < 0;
}




//function that return boolean if number is 10
function equality(ten){
    return ten === 10;
}




//function that doubles input

function timesTwo(red) {
    return red * 2;
}


//function that removes 9's
function pirates(treasure){
    var printArray= [];
    treasure.forEach(function(element){
        if(element !==9){
            printArray.push(element)
        }
    })
    return printArray;
}



//function that counts odds
function skeleton(crew){
    var oddOnes = 0;
    crew.forEach(function(element){
        if(element % 2 !==0){
            oddOnes++;
        }
    })
    return oddOnes;

}


//function that accepts array and gives average
function ll(input){
    var sum = 0 ;
    input.forEach(function(element){
        sum += element;
    })
    return sum/input.length;
}


//function that takes array and presents averages as well
funcion av(sale){
    var sum= 0;
    sale.forEach(function(element){
        sum += element.sales;
    })
    return sum/sale.length;
}

//function that returns objects
function nameO(object){
    var name = object.split(" ");
    return {firstName: name[0], lastName: name[1]};
}


//function that counts vowels
function wheel(of){
    var fortune = 0;
    var giveMeAVowel = ["a","e","i","o","u"];
    of.split("").forEach(function(element){
        giveMeAVowel.forEach(function(vowel){
            if(element === vowel){
                fortune++;
            }
        }
    })
    return fortune;
}

//
// function analyze(input){
//     fortune(input);
//     return {word: input, numberOfLetters: input.length, numberOfVowels:countVowels(input)}
// }


function straight(cap){
    var names =  cap.split("");
    var firstName = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    var lastName = names[1].charAt(0).toUpperCase() + names[0].slice(1);
    return firstName + "" + lastName
}