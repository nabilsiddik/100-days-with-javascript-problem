const countCharacter = (word, keyChar) => {
    let count = 0
    word.split('').map((char) => {
        if(keyChar.toLowerCase() === char.toLowerCase()){
            count++
        }
    })
    
    return count
}

const result = countCharacter('MeIssisIppii', 'P')
console.log(result)