function companyUsers(input) {

    let companyRegister = {};

    input.forEach(personInfo => {
        let [company, personID] = personInfo.split(' -> ');

        if (!companyRegister.hasOwnProperty(company)) {
            companyRegister[company] = []
        }

        companyRegister[company].push(personID)

    });

    let sortedCompanyRegister = Object.entries(companyRegister).sort((a, b) => a[0].localeCompare(b[0]))
    
    sortedCompanyRegister.forEach(element => {
        let company = element[0];
        let ids = element[1];

        let uniqueIds = new Set (ids);
        console.log(company)
        uniqueIds.forEach(id => {
            console.log(`-- ${id}`)
        })
    });
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])