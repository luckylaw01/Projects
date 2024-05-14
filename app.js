function add(num1, num2){
    return num1 + num2;
}


console.log(add(1,5));
console.log(add(3,4));

function addRandom(num1){
    return num1 + Math.random();
}
console.log(addRandom(4));

let previousResult = 0;

function addMoreNumbers(num1, num2){
    const sum = num1 + num2;
    previousResult = sum;
    return previousResult;
}

console.log(addMoreNumbers(4, 6));

const hobbies = ['sports', 'cooking'];

function printHobbies(){
    hobbies.push('HOBBY');
    console.log(hobbies);
}

printHobbies();

let multiplier = 1.1;

function createTaxCalculator(tax){
    function calculateTax(amount){
        console.log(multiplier);
        return amount* tax* multiplier;
    }
    return calculateTax;
}

multiplier = 1.2;

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeAmount(200));


//console.log("VAT: "+ vatAmount + ", Income tax: " + incomeTax);

let userName = 'Lucky';

function greetUser(){
    //let name = 'Anna';
    console.log('Hi ' + name);
}

let name = 'Maximilian'

userName = "Elmi";

greetUser();

// function powerOf(x, n){
//     let result = 1;

//     for(let i= 0; i<n; i++){
//         result *= x;      
//     }

//     return result;
// }

function powerOf(x, n){
    // if(n==1)
    // {
    //     return x;
    // }
    //     return x * powerOf(x, n - 1);

    return n === 1? x: x * powerOf(x, n - 1);
}


console.log(powerOf(2, 3));

const myself = {
    name: 'Lucky',
    friends: [
        {
            name: 'Pius',
            friends: [
                {
                    name: 'Jymoo',
                    friends: [
                        {
                            name: 'Sammy'
                        },
                        {
                            name: "Tabby"
                        }
                    ]
                }
            ]
        },
        {
            name: 'Bibo',
            friends: [
                {
                    name: 'Claire'
                }
            ]
        }

    ]
}

function getFriendNames(person){
   const collectedNames = [];

    if(!person.friends){
        return [];
    }

   for(const friend of person.friends){
        collectedNames.push(friend.name);
        collectedNames.push(...getFriendNames(friend));
   }
   return collectedNames ;
}


console.log(getFriendNames(myself));