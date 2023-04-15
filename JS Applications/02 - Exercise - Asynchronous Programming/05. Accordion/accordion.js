function solution() {
    const mainSection = document.getElementById('main');

    let urlArticles = `http://localhost:3030/jsonstore/advanced/articles/list`;

    try {
        fetch(urlArticles)
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    let accordionDiv = elementFactory('div', '', mainSection, { class: 'accordion' });
                    let headDiv = elementFactory('div', '', accordionDiv, { class: 'head' });
                    let titleSpan = elementFactory('span', `${element.title}`, headDiv);
                    let moreBtn = elementFactory('button', `More`, headDiv, { class: 'button', id: `${element._id}` });

                    let hiddenDiv = elementFactory('div', '', accordionDiv, { class: 'extra' });

                    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${element._id}`;

                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            let contentP = elementFactory('p', data.content, hiddenDiv)
                        })

                    moreBtn.addEventListener('click', function more() {
                        if (moreBtn.textContent == 'More'){
                            hiddenDiv.style.display = 'block';
                            moreBtn.textContent = 'Less'
                        } else {
                            hiddenDiv.style.display = 'none';
                            moreBtn.textContent = 'More'
                        }
                    });
                });
            })
    } catch {
        throw new Error('Error')
    }
}
function elementFactory(type, content, parent, attributes) {
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
}
solution()