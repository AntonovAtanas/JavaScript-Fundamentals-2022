import { details } from './show-details.js';

let detailPage = document.getElementById('detail-page');
let homePage = document.getElementById('home-page');

const createTopicURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';
let titleInput = document.getElementById('topicName');
let usernameInput = document.getElementById('username');
let postInput = document.getElementById('postText');
let topicWrapper = document.querySelector('.topic-container');

const url = 'http://localhost:3030/jsonstore/collections/myboard/posts'

export function showHome() {
    detailPage.style.display = 'none';
    homePage.style.display = 'block';
    detailPage.innerHTML = '';
};

export async function addTopic(topicData) {

    try {
        let response = await fetch(createTopicURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(topicData)
        });

        if (response.status !== 200) {
            throw new Error('Error')
        }

        let data = await response.json();
        return data;
    } catch (error) {
        alert('Error!')
    }

}

export function cancel() {
    titleInput.value = '';
    usernameInput.value = '';
    postInput.value = '';
}

export async function loadAllPosts() {
    try {
        let response = await fetch(url);

        if (response.status !== 200) {
            throw new Error('Error')
        }

        let data = Object.entries(await response.json());

        topicWrapper.innerHTML = '';

        data.forEach(topic => {
            let fragment = document.createDocumentFragment();

            let divWrapper = elementFactory('div', '', fragment, { class: 'topic-name-wrapper' });
            let divTopic = elementFactory('div', '', divWrapper, { class: 'topic-name' });
            let aHref = elementFactory('a', '', divTopic, { class: 'normal', href: `/details`, id: `${topic[1]._id}` });
            aHref.addEventListener('click', details)
            let h2 = elementFactory('h2', `${topic[1].title}`, aHref);
            let divColumns = elementFactory('div', '', divTopic, { class: 'columns' });
            let div = elementFactory('div', '', divColumns);
            let p = elementFactory('p', 'Date: ', div);
            let time = elementFactory('time', `${topic[1].date}`, p);// TODO date update
            let divNickname = elementFactory('div', '', div, { class: 'nick-name' });
            let pUsername = elementFactory('p', 'Username: ', divNickname);
            let span = elementFactory('span', `${topic[1].username}`, pUsername);

            topicWrapper.appendChild(fragment)
        })

    } catch (error) {
        console.log('Error fetching all posts')
    }
}

export function elementFactory(type, content, parent, attributes) {

    let el = document.createElement(type);
    el.textContent = content;

    if (attributes) {
        for (const key in attributes) {
            el.setAttribute(key, attributes[key])
        }
    };

    if (parent) {
        parent.appendChild(el)
    };
    return el
};