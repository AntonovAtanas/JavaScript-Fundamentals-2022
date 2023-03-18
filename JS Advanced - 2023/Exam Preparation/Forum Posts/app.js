window.addEventListener("load", solve);

function solve() {
  const postTitleInput = document.getElementById('post-title');
  const categoryInput = document.getElementById('post-category');
  const textInput = document.getElementById('post-content');

  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list');

  let publishBtn = document.getElementById('publish-btn');
  publishBtn.addEventListener('click', publish);

  let clearBtn = document.getElementById('clear-btn');
  

  function publish(event) {
    event.preventDefault();

    if (postTitleInput.value === '' || categoryInput.value === '' || textInput.value === '') {
      return;
    }
    // creating all elements
    let h4 = document.createElement('h4');
    h4.textContent = postTitleInput.value;

    let pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${categoryInput.value}`;

    let pText = document.createElement('p');
    pText.textContent = `Content: ${textInput.value}`;

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'action-btn edit';

    editBtn.addEventListener('click', (event) => {
      postTitleInput.value = h4.textContent;
      categoryInput.value = pCategory.textContent.split('Category: ')[1];
      textInput.value = pText.textContent.split('Content: ')[1];
      event.target.parentElement.remove();
    })

    let approveBtn = document.createElement('button');
    approveBtn.textContent = 'Approve';
    approveBtn.className = 'action-btn approve';
    approveBtn.addEventListener('click', (event) => {
      let articleApproved = document.createElement('article');
      let liApproved = document.createElement('li');
      liApproved.classList.add('rpost');

      let h4Approved = document.createElement('h4');
      h4Approved.textContent = h4.textContent;

      let pCategoryApproved = document.createElement('p');
      pCategoryApproved.textContent = pCategory.textContent;

      let pTextApproved = document.createElement('p');
      pTextApproved.textContent = pText.textContent;

      articleApproved.appendChild(h4Approved);
      articleApproved.appendChild(pCategoryApproved);
      articleApproved.appendChild(pTextApproved);

      liApproved.appendChild(articleApproved);

      publishedList.appendChild(liApproved);

      clearBtn.addEventListener('click', clear)
      function clear(){
        publishedList.innerHTML = "";
      }

      event.target.parentElement.remove();
    })

    // appending the elements
    let article = document.createElement('article');
    let li = document.createElement('li');
    li.classList.add('rpost');

    article.appendChild(h4);
    article.appendChild(pCategory);
    article.appendChild(pText);

    li.appendChild(article);
    li.appendChild(approveBtn); // changed?
    li.appendChild(editBtn);

    reviewList.appendChild(li);

    postTitleInput.value = '';
    categoryInput.value = '';
    textInput.value = '';
  }
}
