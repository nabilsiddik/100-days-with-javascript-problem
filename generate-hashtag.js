// Generate Hash Tag From a string
const generateHashTag = (str) => {
    if(str.length > 280 || str === '' || str === ' '){
        return false
    }else{
        const wordArray = str.split(' ').filter(str => str.length !== 0)
        
        return wordArray.map((word) => {
            if(word.length !== 0){
                return `#${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
            }else{
                str.replace('')
            }
        }).join('\n')
    }
}

const result = generateHashTag(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever`)
console.log(result)