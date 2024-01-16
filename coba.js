function hapusSpasi(text){
    return text.split(" ").join("")
    
}
function reverseString(text){
    return [...text].reverse().join("")
}
function nextChar(text){
    let vowel = "aiueoAIUEO"
    let vowelNum = [...vowel].map((el) => {
        return el.charCodeAt();
    })
    //console.log(vowelNum)
    let charNum = [...text].map((el) => {
        return el.charCodeAt();
    })
    //console.log(charNum)
    let changedText = charNum.map((element) => {
        for (let index = 0; index < vowelNum.length; index++) {
            if (element == vowelNum[index]){
                element = element + 1
                //console.log(element);
            }
        }
        return String.fromCharCode(element)
    })
    changedText = changedText.join("")
    return changedText
}
let pass = "hai halo"
pass = hapusSpasi(pass)
console.log(pass)
pass = reverseString(pass)
console.log(pass)
pass = nextChar(pass)
console.log(pass)