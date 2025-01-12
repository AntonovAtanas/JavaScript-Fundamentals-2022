function filter(data, criteria) {

    let [prop, value] = criteria.split('-')
    let parsedData = JSON.parse(data);

    parsedData
        .filter(element => element[prop] === value)
        .map((element, index) => {
            console.log(`${index}. ${element.first_name} ${element.last_name} - ${element.email}`)
        });
}

filter(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,

    'all')