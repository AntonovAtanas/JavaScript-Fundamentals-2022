import { elementFactory } from './show-home.js'

let detailPage = document.getElementById('detail-page');
let homePage = document.getElementById('home-page');

let getTopicURL = 'http://localhost:3030/jsonstore/collections/myboard/posts/';
let commentURL = 'http://localhost:3030/jsonstore/collections/myboard/comments';

export function details(event) {
    event.preventDefault();
    let topicID = event.target.parentElement.id
    if (event.target.parentElement.tagName == 'A') {
        homePage.style.display = 'none';
        detailPage.style.display = 'block';

        getComments(topicID);
    };

};

async function topicFiller(id) {
    detailPage.innerHTML = `        <div class="theme-content">
    <!-- theme-title  -->
    <div class="theme-title">
        <div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2>Angular 10</h2>

                    </div>

                </div>
         
    </div>
        
        <div class="comment">
    <div class="header">
        <img src="./static/profile.png" alt="avatar">
        <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>

        <p class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
            sint
            dolorem quam,
            accusantium ipsa veniam laudantium inventore aut, tenetur quibusdam doloribus. Incidunt
            odio
            nostrum facilis ipsum dolorem deserunt illum?</p>
    </div>
</div>`

    let title = document.querySelector('.theme-name h2')
    let name = document.querySelector('.header p span');
    let time = document.querySelector('.header p time');
    let text = document.querySelector('.post-content');

    try {
        let response = await fetch(`${getTopicURL}${id}`);

        if (response.status !== 200) {
            throw new Error('Error fetching the specific topic')
        };

        let data = await response.json();

        title.textContent = data.title;
        name.textContent = data.username;
        time.textContent = data.date;
        text.textContent = data.content;

    } catch (error) {
        console.log(error)
    }

};

async function getComments(topicID) {
    let comment = Array.from(document.querySelectorAll('.comment'));
    comment.forEach(el => el.innerHTML = '');

    topicFiller(topicID);
    addComment(topicID);

    try {
        let response = await fetch(commentURL);

        let data = Object.entries(await response.json());
        if (data.length !== 0) {
            data.forEach(comment => {
                if (comment[1].topicID === topicID) {
                    document.querySelector('.comment').innerHTML += `<div id="user-comment">
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <p><strong>${comment[1].username}</strong> commented on <time>${comment[1].date}</time></p>
            <div class="post-content">
                <p>${comment[1].postText}</p>
            </div>
        </div>
    </div>
</div>`
                }
            })
        }

    } catch (error) {
        console.log(error)
    }
};

function addComment(topicID) {
    let fragment = document.createDocumentFragment();

    let divAnswerComment = elementFactory('div', '', fragment, { class: 'answer-comment' });
    let p = document.createElement('p');
    p.innerHTML = `<p><span>currentUser</span> comment:</p>`;
    divAnswerComment.appendChild(p);
    let divAnswer = elementFactory('div', '', divAnswerComment, { class: 'answer' });
    let form = elementFactory('form', '', divAnswer);
    form.addEventListener('submit', postComment)
    let textArea = elementFactory('textarea', '', form, { name: 'postText', id: 'comment', cols: '30', rows: '10' });
    let div = elementFactory('div', '', form);
    let label = document.createElement('label');
    label.innerHTML = `<label for="username">Username <span class="red">*</span></label>`;
    div.appendChild(label);
    let input = elementFactory('input', '', div, { type: 'text', id: 'username', name: 'username' });
    let button = elementFactory('button', 'Post', form);

    detailPage.appendChild(fragment);

    //adding the comment to DB
    async function postComment(ev) {
        ev.preventDefault();

        let date = new Date()

        let { postText, username, } = Object.fromEntries(new FormData(ev.currentTarget));
        if (postText !== '' && username !== '') {
            try {
                let response = await fetch(commentURL, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ postText, username, topicID, date })
                });

                if (response.status !== 200) {
                    throw new Error('Error adding a comment')
                };

                let data = await response.json();
                ev.target.reset();
                getComments(topicID);
                return data;
            } catch (error) {
                console.log(error)
            }

        }
    }
}

