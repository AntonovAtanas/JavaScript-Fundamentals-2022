import { showHome, addTopic, cancel, loadAllPosts } from './show-home.js';

let newTopicForm = document.querySelector('form');
newTopicForm.addEventListener('submit', newFormData);

document.querySelector('nav a').addEventListener('click', showHome);

window.addEventListener('load', showHome)

document.querySelector('.cancel').addEventListener('click', cancel)

loadAllPosts();

function newFormData(event) {
    event.preventDefault();
    let date = new Date();

    let data = Object.fromEntries(new FormData(event.currentTarget));
    
    let title = data.topicName;
    let content = data.postText;
    let username = data.username;

    if (topicName !== '' && username !== '' && postText !== '') {
        addTopic({ title, username, content, date });
        loadAllPosts();
        cancel();
    }
};