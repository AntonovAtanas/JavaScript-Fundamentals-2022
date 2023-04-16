function attachEvents() {

    const postsDropdownMenu = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const pBody = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');

    let loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', loadPosts);

    let viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', viewPosts)

    const urlPosts = `http://localhost:3030/jsonstore/blog/posts`;
    const urlComments = `http://localhost:3030/jsonstore/blog/comments`;

    let posts = []

    async function loadPosts() {
        postsDropdownMenu.innerHTML = '';
        let response = await fetch(urlPosts);
        let data = Object.entries(await response.json());

        data.forEach(element => {
            let optionElement = document.createElement('option');
            optionElement.value = element[0];
            optionElement.textContent = element[1].title; // needs to be all caps?
            postsDropdownMenu.appendChild(optionElement);
            posts.push({title: element[1].title, body: element[1].body })
        })
    };

    async function viewPosts() {
        let id = postsDropdownMenu.value;
        commentsList.innerHTML = '';

        // post info
        let post = await fetch(urlComments);
        let postData = await post.json();

        const comms = Object.values(postData).filter(el => el.postId === postsDropdownMenu.value);
        postTitle.textContent = postsDropdownMenu.selectedOptions[0].textContent;

        const po = posts.filter(p => p.title === postsDropdownMenu.selectedOptions[0].textContent);
        pBody.textContent = po[0].body;

        // post comments
        let comments = await fetch(urlComments);
        let commentsData = Object.values(await comments.json());

        commentsData.forEach(element => {
            if (element.postId === id) {
                let li = document.createElement('li');
                li.textContent = element.text;
                li.setAttribute('id', `${element.id}`)
                commentsList.appendChild(li)
            }
        })
    }
}

attachEvents();