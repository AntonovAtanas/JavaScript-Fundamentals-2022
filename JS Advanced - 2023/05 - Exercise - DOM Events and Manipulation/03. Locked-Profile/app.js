function lockedProfile() {
    let radioButtons = Array.from(document.querySelectorAll('input[type="radio"]'));
    radioButtons.forEach(element => element.addEventListener('click', radioClick));

    function radioClick(element) {
        if (element.target.value == 'unlock') {
            element.target.checked = true;
            let showMoreButton = element.target.parentElement.querySelector('button');
            showMoreButton.addEventListener('click', showMore)
        }
    }

    function showMore(element) {
        let hiddenField = element.target.parentElement.querySelector('div');

        let showMoreButton = element.target.parentElement.querySelector('button');
        let unlockedButton = element.target.parentElement.children[4];

        if (unlockedButton.checked == true) {
            showMoreButton.removeEventListener('click', showMore);
            showMoreButton.addEventListener('click', showLess);
            hiddenField.style.display = 'inline';
            showMoreButton.textContent = 'Hide it';
        } else {
            showMoreButton.removeEventListener('click', showMore);
            showMoreButton.removeEventListener('click', showLess);
        }
    }

    function showLess(element) {
        let showMoreButton = element.target.parentElement.querySelector('button');
        let lockedButton = element.target.parentElement.children[2];
        if (lockedButton.checked == true) {
            showMoreButton.removeEventListener('click', showLess);
        } else {
            showMoreButton.addEventListener('click', showMore);
            let hiddenField = element.target.parentElement.querySelector('div');
            hiddenField.style.display = 'none';
            showMoreButton.textContent = 'Show more';
        }
    }
}