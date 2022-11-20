function comments(input) {

    let object = {};
    let usersFilteredArr = input.filter(a => a.includes("user"));
    let articleFilteredArr = input.filter(a => a.includes("article"));
    let comments = input.filter(a => a.includes("posts"));

    for (const user of usersFilteredArr) { // create array in the object with all users
        let currentUser = user.split('user ').pop();
        if (!object["users"]) {
            object["users"] = [];
        }
        object["users"].push(currentUser);
    }

    for (const article of articleFilteredArr) { // insert the articles in the main object
        let currentArticle = article.split('article ').pop();
        if (!object[currentArticle]) {
            object[currentArticle] = [[0], {}];
        }
    }

    for (const userPost of comments) {
        let currentUsername = userPost.split(' ').shift();
        let currentArticle = userPost.split(': ')[0].split(' ').pop()
        let comment = userPost.split(': ')[1];

        if (object["users"].includes(currentUsername) && object[currentArticle]) {
            object[currentArticle][0][0] += 1
            object[currentArticle][1][currentUsername] = [comment]
        }
    }

    let objectArr = Object.entries(object).sort((articleA, articleB) => articleB[1][0][0] - articleA[1][0][0]);
    let innerObjectArr = Object.entries(objectArr[1][1][1]).sort((userA, userB) => userA[0].localeCompare(userB[0]));
    objectArr[1][1][1] = Object.fromEntries(innerObjectArr);
    object = Object.fromEntries(objectArr);

    for (const key in object) {
        if (!(key == "users")) {
            console.log(`Comments on ${key}`)
            for (const user in object[key][1]) {
                let fixedComment = object[key][1][user].toString().replace(',', ' -')
                console.log(`--- From user ${user}: ${fixedComment}`)
            }
        }

    }
}

comments(
    //     [
    //     'user aUser123',
    //     'someUser posts on someArticle: NoTitle, stupidComment',
    //     'article Books',
    //     'article Movies',
    //     'article Shopping',
    //     'user someUser',
    //     'user uSeR4',
    //     'user lastUser',
    //     'uSeR4 posts on Books: I like books, I do really like them',
    //     'uSeR4 posts on Movies: I also like movies, I really do',
    //     'someUser posts on Shopping: title, I go shopping every day',
    //     'someUser posts on Movies: Like, I also like movies very much'
    // ]
    ['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby',

        'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']

)