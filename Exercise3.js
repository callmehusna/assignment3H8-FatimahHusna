function sumArr(arr, int) {
    let arrResult = []
    for (let i = 0; i < arr.length; i++) {
        let searchInt = int - arr[i]
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] == searchInt) {
                arrResult.push([arr[i], arr[j]])
                //arr.splice(j, 1)
            }
        }
    }
   console.log(arrResult)   
}
sumArr([2, 1, 4, 3], 5)
sumArr([1, 8, 10, 3, 2, 9], 11)
