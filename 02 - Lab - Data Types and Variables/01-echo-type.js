function echo(command){

    let echoType = typeof (command)

    if (echoType == "string" || echoType == "number"){
        console.log(echoType);
        console.log(command);
    } else {
        console.log(echoType);
        console.log('Parameter is not suitable for printing')
    }

}

echo (undefined)