function isArithmaticProgression(numbers){
    for (let index = 0; index < numbers.length-2; index++) {
        let diff1 = numbers[index+1] - numbers[index]
        let diff2 = numbers[index+2] - numbers[index+1]
        if (diff1 != diff2) {
            return false
        }
    }
    return true
}
a = [2, 4, 6, 9]
console.log(isArithmaticProgression(a))