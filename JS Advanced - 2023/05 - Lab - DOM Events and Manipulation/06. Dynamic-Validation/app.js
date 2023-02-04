function validate() {
    let inputField = document.getElementById('email');

    let regex = /\b[a-z]+@[a-z]+\.[a-z]+/g

    inputField.addEventListener('change', change);

    function change (event){
        let userEmail = inputField.value;
        let result = userEmail.match(regex);
        if (!result){
            event.target.className = 'error'
        } else {
            event.target.className = '';
        }
    }
}