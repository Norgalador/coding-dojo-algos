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