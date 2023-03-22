window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const titleInput = document.getElementById('story-title');
  const genreInput = document.getElementById('genre');
  const storyInput = document.getElementById('story');

  let publishBtn = document.getElementById('form-btn')
  publishBtn.addEventListener('click', publish); 

  let previewList = document.getElementById('preview-list');

  function publish(event) {
    event.preventDefault();

    let name = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let title = titleInput.value;
    let genre = genreInput.value;
    let story = storyInput.value;

    if (name === '' || lastName === '' || age === '' || title === '' || genre === '' || story === '') {
      return;
    };

    // creating the elements - elementFactory is passed: 1. type of HTML element, 2. textContent, 3. where to be appended (parent element), 4. object with properties
    let li = elementFactory('li', '', previewList, { class: 'story-info' });
    let article = elementFactory('article', '', li);
    let h4 = elementFactory('h4', `Name: ${name} ${lastName}`, article);
    let pAge = elementFactory('p', `Age: ${age}`, article);
    let pTitle = elementFactory('p', `Title: ${title}`, article);
    let pGenre = elementFactory('p', `Genre: ${genre}`, article);
    let pStory = elementFactory('p', `${story}`, article);

    let saveBtn = elementFactory('button', 'Save Story', li, { class: 'save-btn' });
    saveBtn.addEventListener('click', save);

    let editBtn = elementFactory('button', 'Edit Story', li, { class: 'edit-btn' });
    editBtn.addEventListener('click', edit);

    let deleteBtn = elementFactory('button', 'Delete Story', li, { class: 'delete-btn' });
    deleteBtn.addEventListener('click', deleteFunction);

    publishBtn.disabled = true;

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    titleInput.value = '';
    genreInput.value = '';
    storyInput.value = '';

    function deleteFunction(){
      li.remove();
      publishBtn.disabled = false;
    }

    function edit() {
      firstNameInput.value = name;
      lastNameInput.value = lastName;
      ageInput.value = age;
      titleInput.value = title;
      genreInput.value = genre;
      storyInput.value = story;
      publishBtn.disabled = false;
      li.remove();
    }

    function save() {
      let mainDiv = document.getElementById('main');
      Array.from(mainDiv.children).forEach(element => element.remove());
      let h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!'
      mainDiv.appendChild(h1)
    }

    function elementFactory(type, textContent, parent, attributes) {
      let el = document.createElement(type);
      el.textContent = textContent;

      if (attributes) {
        for (const key in attributes) {
          el.setAttribute(key, attributes[key])
        }
      }

      if (parent) {
        parent.appendChild(el)
      }

      return el
    }
  }
}
