function convertToJSON (firstName, familyName, color){
    
    let personData = {
        name: firstName,
        lastName: familyName,
        hairColor: color,
    }

    let personDataAsJSON = JSON.stringify(personData);
    console.log(personDataAsJSON)   
}

convertToJSON ('Peter', 'Smith',

'Blond')