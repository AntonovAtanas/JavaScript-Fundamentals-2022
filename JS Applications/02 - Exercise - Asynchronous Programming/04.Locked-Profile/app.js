async function lockedProfile() {
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML = '';
    let response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    let userData = Object.values(await response.json());

    userData.forEach(element => {

        let profileDiv = elementFactory('div', '', mainDiv, { class: 'profile' });
        let img = elementFactory('img', '', profileDiv, { src: './iconProfile2.png', class: 'userIcon' });
        let lockLabel = elementFactory('label', 'Lock', profileDiv);
        let inputLock = elementFactory('input', '', profileDiv, { type: 'radio', name: 'user1Locked', value: 'lock', checked: '' });
        let unlockLabel = elementFactory('label', 'Unlock', profileDiv);
        let inputUnlock = elementFactory('input', '', profileDiv, { type: 'radio', name: 'user1Locked', value: 'unlock' });
        let br = elementFactory('br', '', profileDiv);
        let hr = elementFactory('hr', '', profileDiv);
        let usernameLabel = elementFactory('label', 'Username', profileDiv);
        let inputName = elementFactory('input', '', profileDiv, { type: 'text', name: 'user1Username', value: `${element.username}`, disabled: '', readonly: '' });
        let hiddenDiv = elementFactory('div', '', profileDiv, { id: 'user1HiddenFields' }); // display: none?
        hiddenDiv.style.display = 'none';
        let hr2 = elementFactory('hr', '', hiddenDiv);
        let emailLabel = elementFactory('label', 'Email:', hiddenDiv);
        let emailInput = elementFactory('input', '', hiddenDiv, { type: 'email', name: 'user1Email', value: `${element.email}`, disabled: '', readonly: '' });
        let ageLabel = elementFactory('label', 'Age:', hiddenDiv);
        let ageInput = elementFactory('input', '', hiddenDiv, { type: 'email', name: 'user1Age', value: `${element.age}`, disabled: '', readonly: '' });
        let showMoreBtn = elementFactory('button', 'Show more', profileDiv);

        showMoreBtn.addEventListener('click', function showMore() {
            if (inputUnlock.checked == true && showMoreBtn.textContent == 'Show more') {
                hiddenDiv.style.display = 'block';
                showMoreBtn.textContent = 'Hide it';
            } else if (inputUnlock.checked == true) {
                hiddenDiv.style.display = 'none';
                showMoreBtn.textContent = 'Show more';
            };

        });
    });

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
}
