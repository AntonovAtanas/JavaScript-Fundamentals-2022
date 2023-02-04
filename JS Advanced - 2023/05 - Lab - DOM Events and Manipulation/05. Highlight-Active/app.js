function focused() {
    let inputFieldsCollection = document.querySelectorAll('input'); // for Judge needs to be parsed to Array to be accepted
    inputFieldsCollection.forEach(element => {
        element.addEventListener('focus', focus);
        element.addEventListener('blur', blur);
    });

    function focus(event) {
        this.parentElement.className = 'focused'; // this === even.target
    }

    function blur(event) {
        this.parentElement.className = ''; // this === even.target
    }
}