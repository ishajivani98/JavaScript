// Count Occurrences of an Element in Array
// Write a program to count how many times a specific element appears in an array.


let a = [1, 3, 4, 5, 5 ,9 , 5, 4, 5]
let target =5
let count=0
for (let i = 0; i < a.length; i++) {
   
        if (a[i] == target) {
           count++ 
        }
    
}
console.log('count', count)