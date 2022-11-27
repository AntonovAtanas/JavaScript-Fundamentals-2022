function comments(input) {

    let object = {};
    let allUsersArr = [];

    for (const line of input) {
        if (line.includes('user')) {
            let user = line.split('user ').pop();
            allUsersArr.push(user);
        } else if (line.includes('article')) {
            let article = line.split('article ').pop();
            if (!object.hasOwnProperty(article)) {
                object[article] = {};
            }
        } else if (line.includes('posts')) {
            let user = line.split(' ')[0];
            let article = line.split(': ')[0].split(' ').pop()
            let [commentTitle, text] = line.split(': ')[1].split(', ');
            if (allUsersArr.includes(user)) {
                if (!object[article]){
                    continue;
                }
                if (!object[article].hasOwnProperty(user)) {
                    object[article][user] = {};
                }
                object[article][user][commentTitle] = text;
            }
        }
    }

    let objectArr = Object.entries(object).sort((articleA, articleB) => {
        let a = Object.entries(articleA[1]).length;
        let b = Object.entries(articleB[1]).length;
        return b - a
    })

    for (const currentArticle of objectArr) {
        let commentArr = Object.entries(currentArticle[1]).sort((userA, userB) => userA[0].localeCompare(userB[0]));
        console.log(`Comments on ${currentArticle[0]}`)
        for (const user of commentArr) {
            let usercomment = Object.entries(user[1])
            console.log(`--- From user ${user[0]}: ${usercomment[0][0]} - ${usercomment[0][1]}`)
        }
    }
}

comments(
  //  ['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']
            [
        'user aUser123',
        'someUser posts on someArticle: NoTitle, stupidComment',
        'article Books',
        'article Movies',
        'article Shopping',
        'user someUser',
        'user uSeR4',
        'user lastUser',
        'uSeR4 posts on Books: I like books, I do really like them',
        'uSeR4 posts on Movies: I also like movies, I really do',
        'someUser posts on Shopping: title, I go shopping every day',
        'someUser posts on Movies: Like, I also like movies very much'
    ]
)