function extractFile (input){

    let file = input.split("\\").pop();

    file = file.split('.')
    let fileExtension = file.pop();

    console.log(`File name: ${file.join('.')}`);
    console.log(`File extension: ${fileExtension}`)

}

extractFile ('C:\\Projects\\Data-Structures\\LinkedList.bat.cs')