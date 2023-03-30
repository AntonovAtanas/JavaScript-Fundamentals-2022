class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let resNames = [];
        for (const currentPlayer of footballPlayers) {
            let [name, age, playerValue] = currentPlayer.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let player = this.invitedPlayers.find(element => element['name'] == name);
            let playerIndex = this.invitedPlayers.indexOf(player);

            if (player) {
                if (playerValue > player['playerValue']) {
                    this.invitedPlayers[playerIndex]['playerValue'] = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
                resNames.push(name)
            }
        }
        return `You successfully invite ${resNames.join(', ')}.`
    };

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        let player = this.invitedPlayers.find(element => element['name'] == name);
        let playerIndex = this.invitedPlayers.indexOf(player);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        };

        if (playerOffer < player['playerValue']) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${player['playerValue'] - playerOffer} million more are needed to sign the contract!`)
        }

        this.invitedPlayers[playerIndex]['playerValue'] = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    };

    ageLimit(name, age){
        let player = this.invitedPlayers.find(element => element['name'] == name);
        let playerIndex = this.invitedPlayers.indexOf(player);

        if (!player){
            throw new Error(`${name} is not invited to the selection list!`)
        };

        if (this.invitedPlayers[playerIndex]['age'] < age){ 
            if (age - this.invitedPlayers[playerIndex]['age'] < 5){
                return `${name} will sign a contract for ${age - this.invitedPlayers[playerIndex]['age']} years with ${this.clubName} in ${this.country}!`
            } else { 
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!` 
            }
        } else {
            return `${name} is above age limit!`
        }
    };

    transferWindowResult(){
        let res = ['Players list:'];

        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        for (const currentPlayer of this.invitedPlayers) {
            res.push(`Player ${currentPlayer.name}-${currentPlayer.playerValue}`)
        };

        return res.join('\n')
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());





// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52
