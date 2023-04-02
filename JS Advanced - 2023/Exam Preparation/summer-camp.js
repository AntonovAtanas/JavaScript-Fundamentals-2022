class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        };

        let isIncluded = this.listOfParticipants.find(participant => participant.name === name)
        if (isIncluded !== undefined) {
            return `The ${name} is already registered at the camp.`;
        };

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        };

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`
    };

    unregisterParticipant(name) {
        let isIncluded = this.listOfParticipants.find(participant => participant.name === name);
        let indexToDelete = this.listOfParticipants.indexOf(isIncluded);
        if (isIncluded === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`)
        } else {
            this.listOfParticipants.splice(indexToDelete, 1)
            return `The ${name} removed successfully.`
        }
    };

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'Battleship') {
            let isIncluded = this.listOfParticipants.find(participant => participant.name === participant1);
            if (isIncluded === undefined) {
                throw new Error('Invalid entered name/s.');
            } else {
                let indexToAdd = this.listOfParticipants.indexOf(isIncluded);
                this.listOfParticipants[indexToAdd].power += 20;
                return `The ${participant1} successfully completed the game ${typeOfGame}.`
            }
        } else if (typeOfGame === 'WaterBalloonFights') {
            let isFirstIncluded = this.listOfParticipants.find(participant => participant.name === participant1);
            let isSecondIncluded = this.listOfParticipants.find(participant => participant.name === participant2);
            if (isFirstIncluded === undefined || isSecondIncluded === undefined) {
                throw new Error(`Invalid entered name/s.`)
            };

            if (isFirstIncluded.condition !== isSecondIncluded.condition) {
                throw new Error(`Choose players with equal condition.`)
            };

            if (isFirstIncluded.power > isSecondIncluded.power) {
                isFirstIncluded.wins++;
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (isFirstIncluded.power < isSecondIncluded.power) {
                isSecondIncluded.wins++;
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        }
    }
    toString() {
        let firstLineReturn = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        let sortedParticipantsArr = Object.entries(this.listOfParticipants).sort((a, b) => b[1].wins - a[1].wins)
        let participantsResult = [];

        for (const iterator of sortedParticipantsArr) {
            let currentParticipant = iterator[1]

            participantsResult.push(`${currentParticipant.name} - ${currentParticipant.condition} - ${currentParticipant.power} - ${currentParticipant.wins}`)
        }
        return `${firstLineReturn}\n${participantsResult.join('\n')}`;
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());