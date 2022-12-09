function charactersInRange (firstChar, secondChar){

   let minCharNumber = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
   let maxCharNumber = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

   let result = '';

   for (let i = minCharNumber+1; i < maxCharNumber; i++){
    result += String.fromCharCode(i) + " ";
   }

   console.log(result)
}

charactersInRange ('C',

'#')