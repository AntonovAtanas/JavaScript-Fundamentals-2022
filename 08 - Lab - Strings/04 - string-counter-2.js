function stringCounter (string, word){

    let wordArr = string.split(' ').filter(searchedWord => searchedWord == word);
    console.log(wordArr.length)

}

stringCounter ('This is a word and it also is a sentence',
'is')