function maxSubArr(arr) {
    let maxSum = -9999999
    let sumNow = 0
    let startIndex = 0
    let endIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > sumNow + arr[i]){
            sumNow = arr[i]
            startIndex = i
            
        } else {
            sumNow = sumNow + arr[i]
        }
        if (maxSum < sumNow){
            maxSum = sumNow
            endIndex = i
        } 
    }
    return [arr.slice(startIndex, endIndex+1), maxSum]
}
    
let a = [-2,-3,4,-1,-2,1,5,-3]
console.log(maxSubArr(a))