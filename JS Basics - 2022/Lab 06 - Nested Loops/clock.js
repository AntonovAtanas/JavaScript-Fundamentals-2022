function clock() {

    for (let i = 0; i < 24; i++) {

        for (let minutes = 0; minutes < 60; minutes++) {
            if (minutes < 10) {
                console.log(`${i}:${minutes}`)
            } else {
                console.log(`${i}:${minutes}`)
            }
        }
    }
}

clock()