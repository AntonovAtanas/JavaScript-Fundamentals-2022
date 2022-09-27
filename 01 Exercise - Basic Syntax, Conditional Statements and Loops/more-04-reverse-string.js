function reverseString(str) {
   
    let splitStr = str.split("");
   
    let reverseStr = splitStr.reverse();
    let finalStr = reverseStr.join("");

    console.log(finalStr)

}
reverseString('hello');

