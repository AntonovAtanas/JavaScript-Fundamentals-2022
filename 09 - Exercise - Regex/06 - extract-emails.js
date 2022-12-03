function extractEmails (input){
    let regex = /(?<!\S)(?<user>[a-zA-Z0-9]+[a-zA-Z0-9\_\-\.]*[^\W])@(?<host>[a-zA-Z\-]+\.[A-Za-z\-\.]+[A-Za-z])/g
    let result = input.match(regex);
    console.log(result.join('\n'))

}

extractEmails ('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')