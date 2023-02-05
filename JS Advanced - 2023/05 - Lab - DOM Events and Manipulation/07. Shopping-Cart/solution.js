function solve() {
   Array.from(document.querySelectorAll('.add-product')).forEach(element => element.addEventListener('click', addToCart));
   let btns = document.getElementsByTagName('button');
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkoutBtn = document.querySelector('.checkout');
   checkoutBtn.addEventListener('click', checkout);
   checkoutBtn.addEventListener('click', btnDisable);

   let boughtProducts = {};

   function addToCart(event) {
      let currentProductData = event.target.parentElement.parentElement;
      let productName = currentProductData.querySelector('.product-title').textContent;
      let price = Number(currentProductData.querySelector('.product-line-price').textContent);
      textArea.textContent += `Added ${productName} for ${price.toFixed(2)} to the cart.\n`

      if (!boughtProducts.hasOwnProperty(productName)) {
         boughtProducts[productName] = 0;
      }
      
      boughtProducts[productName] += price;
   }

   let sum = 0;
   let itemsArr = [];

   function checkout() {
      for (const product in boughtProducts) {
         itemsArr.push(product);
         sum += boughtProducts[product];
      }
      textArea.textContent += `You bought ${itemsArr.join(', ')} for ${sum.toFixed(2)}.`
   }

   function btnDisable() {
      Array.from(btns).forEach(element => element.removeEventListener('click', addToCart))
      checkoutBtn.removeEventListener('click', btnDisable);
      checkoutBtn.removeEventListener('click', checkout);
   }
}