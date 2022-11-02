function shoppingList (input){

    let array = input.slice();
    let initialList = array.shift().split('!');
    let arrayLength = array.length;

    for(let i = 0; i < arrayLength; i++){
        let command = array[i].split(' ');
        let condition = command[0];
        let item = command[1];
        let newItem = command[2];

        if(array[i] === "Go Shopping!"){
            break;
        }

        if (condition === "Urgent"){
            if (!initialList.includes(item)){
                initialList.unshift(item)
            }
        } else if (condition === "Unnecessary"){
            if (initialList.includes(item)){
                let indexToRemove = initialList.indexOf(item);
                initialList.splice(indexToRemove, 1);
            }
        } else if (condition === "Correct"){
            if (initialList.includes(item)){
                let indexToChange = initialList.indexOf(item);
                initialList[indexToChange] = newItem;
            }
        } else if (condition === "Rearrange"){
            if (initialList.includes(item)){
                let indexToRearrange = initialList.indexOf(item);
                initialList.splice(indexToRearrange, 1);
                initialList.push(item)
            }
        }
    }
    console.log(initialList.join(', '))
}

shoppingList(["Tomatoes!Potatoes!Bread",

"Unnecessary Milk",

"Urgent Tomatoes",

"Go Shopping!"])