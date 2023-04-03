class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (!this.participants[participantName]) {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
        return `${participantName} has already been added to the list`;
    };

    completeness(participantName, condition) {
        if (!this.participants[participantName]) {
            throw new Error(`${participantName} is not in the current participants list`);
        };

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        };

        let disciplines = Math.floor(condition / 30); // edge ?

        if (disciplines === 1 || disciplines === 2) {
            return `${participantName} could only complete ${disciplines} of the disciplines`;
        };

        this.listOfFinalists.push({ [participantName]: this.participants[participantName] });
        return `Congratulations, ${participantName} finished the whole competition`;
    };

    rewarding(participantName) {
        let isFound = this.listOfFinalists.some(element => element[participantName]);

        if (!isFound) {
            return `${participantName} is not in the current finalists list`
        }

        return `${participantName} was rewarded with a trophy for his performance`
    };

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`
        };
        let res = [];

        for (const currentParticipant of this.listOfFinalists) {
            let [name, gender] = Object.entries(currentParticipant)[0];

            if (criteria === 'all') {
                res.push(name)
            } else {
                if (gender === 'male' || gender === 'female') {
                    return `${name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            }
        }
        if (criteria === 'all'){
            res = res.sort((a, b) => a.localeCompare(b));
        }

        return `List of all ${this.competitionName} finalists:\n${res.join('\n')}`
    }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));



// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon

