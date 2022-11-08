function songsClass(array) {

    let numberOfSongs = Number(array.shift());
    let type = array.pop();

    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let command of array) {
        command = command.split("_");
        let typeOf = command[0];
        let songName = command[1];
        let duration = command[2];

        new Songs(typeOf, songName, duration);

        if (type === typeOf) {
            console.log(songName)
        } else if (type === "all") {
            console.log(songName)
        }
    }

}
songsClass([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])