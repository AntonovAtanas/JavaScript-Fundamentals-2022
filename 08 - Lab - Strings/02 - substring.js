function subStr (word, startIndex, count){

    let res = word.substring(startIndex, count + startIndex);
    // similar
    // let res = word.slice(startIndex, count + startIndex);
    console.log(res)
}

subStr ('SkipWord', 4, 7)