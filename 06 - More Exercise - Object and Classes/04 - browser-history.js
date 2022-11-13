function browserHistory(object, array) {

    for (const line of array) {
        if (line === "Clear History and Cache") {
            object = {
                "Browser Name": object["Browser Name"],
                "Open Tabs": [],
                "Recently Closed": [],
                "Browser Logs": []
            };
        } else {
            let [command, website] = line.split(' ');
            if (command === "Close") {
                if (object["Open Tabs"].includes(website)) {
                    let indexToDelete = object["Open Tabs"].indexOf(website);
                    object["Open Tabs"].splice(indexToDelete, 1);
                    object["Recently Closed"].push(website)
                    object["Browser Logs"].push(line)
                }
            } else if (command === "Open") {
                object["Open Tabs"].push(website);
                object["Browser Logs"].push(line);
            }
        }
    }

    console.log(object["Browser Name"])
    console.log(`Open Tabs: ${object["Open Tabs"].join(', ')}`)
    console.log(`Recently Closed: ${object["Recently Closed"].join(', ')}`)
    console.log(`Browser Logs: ${object["Browser Logs"].join(', ')}`)
}

browserHistory(
    {
        "Browser Name": "Google Chrome",
        "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },

    ["Close Facebook", "Open StackOverFlow", "Open Google"]
    // {
    //     "Browser Name": "Mozilla Firefox",

    //     "Open Tabs": ["YouTube"],

    //     "Recently Closed": ["Gmail", "Dropbox"],

    //     "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
    // },

    // ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)