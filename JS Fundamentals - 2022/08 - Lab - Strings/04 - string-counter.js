function stringCounter (string, word){

    string = string.split(' ');
    counter = 0;
    string.forEach(element => {
        if (element == word){
            counter++
        }
    });

    console.log(counter)
}

stringCounter ('This is a word and it also is a sentence',
'is')