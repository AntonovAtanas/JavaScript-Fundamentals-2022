window.addEventListener('load', solve);

function solve() {
    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');

    const likesParagraph = document.getElementsByClassName('likes')[0].children[0]

    const collectionSongsContainer = document.getElementsByClassName('all-hits-container')[0]
    const savedSongsContainer = document.getElementsByClassName('saved-container')[0];

    const addBtn = document.getElementById('add-btn').addEventListener('click', add);

    function add(ev) {
        ev.preventDefault();
        if (genreInput.value != '' && nameInput.value != '' && authorInput.value != '' && dateInput.value != '') {
            let genreH2 = document.createElement('h2');
            genreH2.textContent = `Genre: ${genreInput.value}`;

            let nameH2 = document.createElement('h2');
            nameH2.textContent = `Name: ${nameInput.value}`;

            let authorH2 = document.createElement('h2');
            authorH2.textContent = `Author: ${authorInput.value}`;

            let dateH3 = document.createElement('h3');
            dateH3.textContent = `Date: ${dateInput.value}`;
            //create the info div
            let hitsInfoDiv = document.createElement('div');
            hitsInfoDiv.classList.add('hits-info');

            //create img src
            let img = document.createElement('img');
            img.src = './static/img/img.png';

            //creating the buttons
            let saveBtn = document.createElement('button');
            saveBtn.addEventListener('click', save);
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';

            let likeBtn = document.createElement('button');
            likeBtn.addEventListener('click', like);
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';

            let deleteBtn = document.createElement('button');
            deleteBtn.addEventListener('click', deleteButton);
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';

            // append the elements to div info

            hitsInfoDiv.appendChild(img);
            hitsInfoDiv.appendChild(genreH2);
            hitsInfoDiv.appendChild(nameH2);
            hitsInfoDiv.appendChild(authorH2);
            hitsInfoDiv.appendChild(dateH3);
            hitsInfoDiv.appendChild(saveBtn);
            hitsInfoDiv.appendChild(likeBtn);
            hitsInfoDiv.appendChild(deleteBtn);

            // append to the colleciton container;
            collectionSongsContainer.appendChild(hitsInfoDiv);

            genreInput.value = ''
            nameInput.value = ''
            authorInput.value = ''
            dateInput.value = ''

            function like(ev) {
                let likes = Number(likesParagraph.textContent.split('Total Likes: ')[1]);
                likes += 1;
                likesParagraph.textContent = `Total Likes: ${likes}`; //incrementing the likes
                ev.target.parentElement.children[6].disabled = true; // disabling the like button
            }

            function deleteButton(ev) {
                ev.target.parentElement.remove()
            }

            function save(ev) {
                savedSongsContainer.appendChild(ev.target.parentElement);
                likeBtn.remove();
                saveBtn.remove();
            }
        }
    }
}