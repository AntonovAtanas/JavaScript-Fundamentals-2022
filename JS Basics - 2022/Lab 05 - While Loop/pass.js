function pass (input){


    let index = 0;
    let username = input[index];
    index++

    let password = input[index];
    index++

    let command = input[index];
    index++

        while(command !== password){

           
            command = input[index];
            index++

        }

        console.log(`Welcome ${username}!`)

}

pass (["Nakov",

"1234",

"Pass",

"1324",

"1234"])