function worldTour(input) {

    let initialStops = input.shift();
    let command = input.shift();

    while (command !== "Travel") {

        if (command.includes('Add Stop')) {
            let [currentCommand, index, string] = command.split(':');
            if (initialStops[index]) {
                index = Number(index)
                initialStops = initialStops.substring(0, index) + string + initialStops.substring(index);
            }
            console.log(initialStops)
        } else if (command.includes('Remove Stop')) {
            let [currentCommand, startIndex, endIndex] = command.split(':');
            startIndex = Number(startIndex);
            endIndex = Number(endIndex)
            if (initialStops[startIndex] && initialStops[endIndex]) {
                startIndex = Number(startIndex);
                endIndex = Number(endIndex)
                initialStops = initialStops.substring(0, startIndex) + initialStops.substring(endIndex + 1)
            }
            console.log(initialStops)
        } else if (command.includes('Switch')) {
            let [currentCommand, oldString, newString] = command.split(':');
            if (initialStops.includes(oldString)) {
                initialStops = initialStops.replace(oldString, newString);
            }
            console.log(initialStops)
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${initialStops}`)
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
