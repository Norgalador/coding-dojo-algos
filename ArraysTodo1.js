// Push front
// Directions: Insert a value at the beginning of an array

    //without push method
    function pushFront(arr, val){
        for(let i = arr.length; i >= 0; i--){
            arr[i] = arr[i - 1]
        }

        arr[0] = val

        return arr
    }

    console.log(pushFront([5,30,12,8], 3));

// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:
    // popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
    // popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr){
    // saving front value
    let temp = arr[0]
    // loop
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1]
    }
    // delete final value
    arr.length = arr.length - 1
    // logging the array
    console.log(arr)
    // return front value
    return temp 
}

console.log(popFront([5,30,12,8]));

// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
// You may use .push(), you are able do this without it though!
// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, index, val){
    // my loop to shift values to right until index
    for(let i = arr.length; i >= index; i--){
        arr[i] = arr[i - 1]
    }
    // set arr[index] = given value
    arr[index] = val
    // return array
    return arr
}

console.log(insertAt([5,30,12], 2, 40));

