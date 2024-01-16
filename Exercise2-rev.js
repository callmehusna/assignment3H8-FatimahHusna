function threeStepsAB(text){
    let arrText = [...text]
    for (let i = 0; i < arrText.length; i++) {
        if (arrText[i] == "a" || arrText[i] == "A"){
            //console.log(arrText[i], arrText[i+3])
            if (arrText[i+4] == "b" || arrText[i+4] == "B") {
                return true
            }
        }
        if (arrText[i] == "b" || arrText[i] == "B"){
            //console.log(arrText[i], arrText[i+3])
            if (arrText[i+4] == "a" || arrText[i+4] == "A") {
                return true
            }
        } 
    }
    return false
}
console.log(threeStepsAB("lane borrowed"))
console.log(threeStepsAB("i am sick"))
console.log(threeStepsAB("you are boring"))
console.log(threeStepsAB("barbarian"))