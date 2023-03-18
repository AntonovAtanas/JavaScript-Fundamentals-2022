window.addEventListener("load", solve);

function solve() {
  // input fields
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('genderSelect');
  const dishInfoTaskInput = document.getElementById('task');

  // in progress container
  let inProgress = document.getElementById('in-progress');
  let inProgressCounter = document.getElementById('progress-count');

  //  completed
  let completedContainer = document.getElementById('finished');

  // buttons
  document.getElementById('form-btn').addEventListener('click', submit);
  document.getElementById('clear-btn').addEventListener('click', () => {
    Array.from(completedContainer.querySelectorAll('li')).forEach(el => el.remove());
  });

  function submit(event) {
    event.preventDefault();

    let name = firstNameInput.value;
    let lastname = lastNameInput.value;
    let age = ageInput.value;
    let gender = genderInput.value;
    let dish = dishInfoTaskInput.value

    if (
      name === '' ||
      lastname === '' ||
      age === '' ||
      gender === '' ||
      dish === ''
    ) {
      return;
    }
    // begin creating the elements from the main parent to the smallest children
    let li = elementFactory('li', '', inProgress, { class: 'each-line' }); // pass to elementFactory: 1. type of HTML element, 2. textContent, 3. where to be appended (parent element), 4. object with properties
    let article = elementFactory('article', '', li);
    let h4 = elementFactory('h4', `${name} ${lastname}`, article);
    let pGender = elementFactory('p', `${gender}, ${age}`, article);
    let pText = elementFactory('p', `Dish description: ${dish}`, article);

    let editBtn = elementFactory('button', `Edit`, li, { class: 'edit-btn' });
    editBtn.addEventListener('click', edit);

    let completeBtn = elementFactory('button', `Mark as complete`, li, { class: 'complete-btn' });
    completeBtn.addEventListener('click', complete);

    // increment the counter
    inProgressCounter.textContent = Number(inProgressCounter.textContent) + 1;

    // clear the input fields
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    dishInfoTaskInput.value = '';
    genderInput.value = ''

    // creating all elements
    function elementFactory(elementType, content, parentElement, attribute) {
      let el = document.createElement(elementType);
      el.textContent = content;

      if (attribute) {
        for (const key in attribute) {
          el.setAttribute(key, attribute[key])
        }
      };

      if (parentElement) {
        parentElement.appendChild(el);
      }
      return el
    }

    // editing the elements
    function edit() {
      firstNameInput.value = name
      lastNameInput.value = lastname
      ageInput.value = age
      genderInput.value = gender
      dishInfoTaskInput.value = dish
      li.remove()
      inProgressCounter.textContent = Number(inProgressCounter.textContent) - 1;
    }

    //completing the dish
    function complete() {
      editBtn.remove();
      completeBtn.remove();
      inProgressCounter.textContent = Number(inProgressCounter.textContent) - 1;
      completedContainer.appendChild(li)
    }
  }
}
