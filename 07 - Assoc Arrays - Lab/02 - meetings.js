function meetingAppointments (input){

    let meetingsRegister = {};

    input.forEach(meeting => {
        let [day, person] = meeting.split(' ');

        if (!meetingsRegister.hasOwnProperty(day)){
            meetingsRegister[day] = person;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    });

    for (let meeting in meetingsRegister){
        console.log(`${meeting} -> ${meetingsRegister[meeting]}`)
    }

}

meetingAppointments (['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])