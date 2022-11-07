function convertToObject(data){

    let dataAsObject = JSON.parse(data)

    for (let key of Object.keys(dataAsObject)){
        console.log(`${key}: ${dataAsObject[key]}`)
    }

}

convertToObject ('{"name": "George", "age": 40, "town": "Sofia"}')