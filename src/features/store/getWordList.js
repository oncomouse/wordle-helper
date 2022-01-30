const getWordList = () => fetch('/words.json').then((res) => res.json())

export default getWordList
