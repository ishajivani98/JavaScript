// Remove Duplicate Values From an Array
// Write a function to remove duplicates from an array and return the new array.









const array=[1,2,3,4,3,2]

const newarr= array.filter((value,index)=> array.indexOf(value)==index)



console.log(newarr)






















// 🔁 Iteration Methods (Loop through arrays)
// Method	Description
// forEach()	Executes a function for each element
// map()	Creates a new array with results
// filter()	Filters elements based on condition
// reduce()	Reduces array to a single value
// reduceRight()	Same as reduce, but from right to left
// some()	Returns true if any element matches
// every()	Returns true if all elements match
// find()	Returns first element that matches
// findIndex()	Returns index of first match
// flatMap()	Like map() followed by flat()





// 🎯 Adding/Removing Elements
// Method	Description
// push()	Add to end
// pop()	Remove from end
// unshift()	Add to beginning
// shift()	Remove from beginning
// splice()	Add/Remove elements in any position
// slice()	Returns a portion of the array

// 📚 Searching & Indexing
// Method	Description
// indexOf()	First index of an element
// lastIndexOf()	Last index of an element
// includes()	Check if an element exists

// 📏 Transformation
// Method	Description
// sort()	Sorts array in-place (can mutate)
// reverse()	Reverses array in-place
// join()	Joins array elements into a string
// toString()	Converts array to string
// flat()	Flattens nested arrays
// fill()	Fills all elements with static value
// copyWithin()	Copies part of array within itself

// 🆕 Creation Methods (Array static methods)
// Method	Description
// Array.from()	Creates array from array-like or iterable obj
// Array.of()	Creates array from arguments
// Array.isArray()	Checks if value is an array

// 🔧 Other Useful Ones
// Method	Description
// concat()	Combines arrays
// entries()	Returns key/value pair iterator
// keys()	Returns index iterator
// values()	Returns value iterator
// at()	Returns element at given index (supports -1)
// toLocaleString()	Converts array to local-specific string