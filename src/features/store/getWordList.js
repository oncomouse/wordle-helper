const getWordList = () => fetch(`${process.env.PUBLIC_URL}/words.json`).then((res) => res.json())

export default getWordList
