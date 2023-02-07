function create(words) {
   let divContent = document.getElementById('content');

   words.forEach(element => {
      let div = document.createElement('div');
      let p = document.createElement('p');

      div.addEventListener('click', display);
      p.textContent = element;
      p.style.display = 'none';

      divContent.appendChild(div);
      div.appendChild(p);
   });

   function display(event) {
      let p = event.target.children[0];
      p.style.display = '';
   }
}