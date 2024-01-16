function threeStepsAB(text){
    let charNum = [...text].map((el) => {
        return el.charCodeAt();
    })
    for (let i = 0; i < charNum.length; i++) {
        for (let j = i+1; j < charNum.length; j++) {
            let upper = charNum[j] + 3
            let lower = charNum[j] - 3
            if(charNum[i] == upper || charNum[j] == lower) {
                //console.log(String.fromCharCode(charNum[i], charNum[j]))
                return true
            }
        }     
    }
    return false
}
console.log(threeStepsAB("lane borrowed"))
console.log(threeStepsAB("i am sick"))
console.log(threeStepsAB("you are boring"))
