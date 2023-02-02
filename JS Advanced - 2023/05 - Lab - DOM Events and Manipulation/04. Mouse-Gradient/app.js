function attachGradientEvents() {
   let box = document.getElementById('gradient')
   box.addEventListener('mousemove', mouseOver);
   let result = document.getElementById('result');

   function mouseOver (event){
        let percentage = Math.floor((event.offsetX / box.clientWidth)*100)
        result.textContent = `${percentage}%`
   }
}