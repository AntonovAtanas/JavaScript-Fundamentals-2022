function personInfo (firstName, lastName, old){

    let personalInfo = {};

    personalInfo.firstName = firstName;
    personalInfo.lastName = lastName;
    personalInfo.age = old;
    // newest function syntax - best practice for including functions/methods in object
    // eat () {
    //     console.log("eating")
    // }

    return personalInfo

}

personInfo ("Peter",

"Pan",

"20")