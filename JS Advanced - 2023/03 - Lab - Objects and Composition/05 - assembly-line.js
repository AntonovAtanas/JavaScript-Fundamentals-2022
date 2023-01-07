function createAssemblyLine() {

    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else {
                    car.temp--;
                }
            }
        },

        hasAudio(car) {
            car.currentTrack = null;
            car.nowPlaying = () => {
                if (car.currentTrack !== null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },

        hasParktronic(car) {
            car.checkDistance = (number) => {
                let result = '';
                if (number < 0.1) {
                    result = 'Beep! Beep! Beep!';
                } else if (number >= 0.1 && number < 0.25) {
                    result = 'Beep! Beep!';
                } else if (number >= 0.25 && number < 0.5) {
                    result = 'Beep!'
                }
                console.log(result);
            }
        }
    }
}


const assemblyLine = createAssemblyLine();

const myCar = {

    make: 'Toyota',
    model: 'Avensis'

};


assemblyLine.hasClima(myCar);

console.log(myCar.temp);

myCar.tempSettings = 18;

myCar.adjustTemp();

console.log(myCar.temp);

assemblyLine.hasAudio(myCar);

myCar.currentTrack = {

    name: 'Never Gonna Give You Up',

    artist: 'Rick Astley'

};

myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);

myCar.checkDistance(0.4);

myCar.checkDistance(0.2);
