function softuniStudents(input) {

    let students = {};

    for (const command of input) {
        if (command.includes(':')) {
            let [language, capacity] = command.split(': ');
            if (!students[language]) {
                students[language] = {
                    capacity: 0,
                    student: []
                };
            }
            students[language].capacity += Number(capacity)
        } else {
            let destructedCommand = command.split(' ');
            let [username, credits] = destructedCommand[0].split('[');
            credits = Number(credits.slice(0, -1));
            let userEmail = destructedCommand[3];
            let userCourse = destructedCommand[5];

            if (students[userCourse] && students[userCourse].capacity > 0) {
                students[userCourse].student.push({
                    username: username,
                    credits: credits,
                    userEmail: userEmail,
                })
                students[userCourse].capacity -= 1;
            }
        }
    }

    let studentsArr = Object.entries(students).sort((languageA, languageB) => {
        let languageAArr = Object.keys(languageA[1].student);
        let languageBArr = Object.keys(languageB[1].student);

        return languageBArr.length - languageAArr.length
    })

    for (const languageArr of studentsArr) {
        console.log(`${languageArr[0]}: ${languageArr[1].capacity} places left`)
        let studentsArr = Object.entries(languageArr[1].student).sort((studentA, studentB) => studentB[1].credits - studentA[1].credits)
        for (const student of studentsArr) {
            console.log(`--- ${student[1].credits}: ${student[1].username}, ${student[1].userEmail}`)
        }
    }
}

softuniStudents([

    'JavaBasics: 2',

    'user1[25] with email user1@user.com joins C#Basics',

    'C#Advanced: 3',

    'JSCore: 4',

    'user2[30] with email user2@user.com joins C#Basics',

    'user13[50] with email user13@user.com joins JSCore',

    'user1[25] with email user1@user.com joins JSCore',

    'user8[18] with email user8@user.com joins C#Advanced',

    'user6[85] with email user6@user.com joins JSCore',

    'JSCore: 2',

    'user11[3] with email user11@user.com joins JavaBasics',

    'user45[105] with email user45@user.com joins JSCore',

    'user007[20] with email user007@user.com joins JSCore',

    'user700[29] with email user700@user.com joins JSCore',

    'user900[88] with email user900@user.com joins JSCore'
])