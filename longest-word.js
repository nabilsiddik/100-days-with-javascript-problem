// Find longest word and that words length of a a string
const findLongestWord = (str) => {
    const lengthOfWords = []
    const words = str.split(' ')

    words.map((word) => {
        lengthOfWords.push(word.length)
    })

    const maxLength = Math.max(... lengthOfWords)
    const thatWordIndex = lengthOfWords.indexOf(maxLength)

    return `The maximum lenght of word is ${maxLength} and the word is ${words[thatWordIndex]}`
}

const result = findLongestWord('The name of my tangladesh country is Bangladeshi')
console.log(result)