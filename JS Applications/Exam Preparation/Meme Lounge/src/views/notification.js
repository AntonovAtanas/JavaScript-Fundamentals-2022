let box = document.getElementById('errorBox');
let text = box.querySelector('span');


export function notificationError(error){
    text.textContent = `${error}`;
    box.style.display = 'block';
    
    setTimeout(() => {
        box.style.display = 'none'
    }, 3000);
}