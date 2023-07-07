


function getLastIndex(arr) {
return arr.length - 1;
}


function getSecondToLastIndex(arr) {
return arr.length - 2;
}



function getFirstElement(arr) {
    return arr[0];
}





function getLastElement(arr) {
return arr[arr.length - 1];
}


function getSecondToLastElement(arr) {
    return arr[arr.length - 2];
}


function getSum(ints) {
let answer = 0;
    for(let i = 0; i < ints.length; i++){
        answer = answer + ints[i];
    }
    return "the answer is " + answer;
}


function getAverage(ints) {
    let sum = 0;
 let average = 0;
    for(let i = 0; i < ints.length; i++){
        sum = sum + ints[i];
        average = sum / ints.length;
    }
    return average;
}


function extractAllOddNumbers(numbers) {
    let amount = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 1){
            amount++;
        }
    }

    let odds = new Array(amount);
    let index = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 1) {
            odds[index] = numbers[i];
            index++;
        }
    }
    return "the odd numbers in the array are " + odds.join(', ');
}


function extractAllEvenNumbers(numbers) {
    
    let amount = 0;


    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            amount++;
        }
    }

    let evens = new Array(amount);
    let index = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evens[index] = numbers[i];
            index++;
        }
    }

    return "the even numbers in the array are " + evens.join(', ');
}


function contains(names, element) {
    let isItTrue = false;
    for (let i = 0; i < names.length; i++){
        if (names[i] === element){
            isItTrue = true;
        }
    }
    return isItTrue;
}


console.log(getLastIndex(["alfonza", "mikaila", "bootywarrior3000"]));

console.log(getSecondToLastIndex(["alfonza", "mikaila", "bootywarrior3000"]));

console.log(getFirstElement(["alfonza", "mikaila", "bootywarrior3000"]));

console.log(getLastElement(["alfonza", "mikaila", "bootywarrior3000"]));

console.log(getSecondToLastElement(["alfonza", "mikaila", "bootywarrior3000"]));

console.log(getSum([1, 2, 3, 4, 5]));

console.log(getAverage([1, 2, 3, 4, 5]));

console.log(extractAllOddNumbers([1, 2, 3, 4, 5]));

console.log(extractAllEvenNumbers([1, 2, 3, 4, 5]));

console.log(contains(["alfonza", "mikaila", "bootywarrior3000"], "Bob"));
