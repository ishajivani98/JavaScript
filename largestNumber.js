//. Write a function that takes an array of numbers and returns the largest number.

let arrayOfNum = [1, 4, 8, 5]

let max = arrayOfNum[0]

for (let i = 0; i < arrayOfNum.length; i++) {

    if (arrayOfNum[i] > max) {

        max = arrayOfNum[i]

    }

}

console.log( "largest number of array (",arrayOfNum,") is " ,max)