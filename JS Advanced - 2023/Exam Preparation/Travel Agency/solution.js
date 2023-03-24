window.addEventListener('load', solution);

function solution() {
  const fullNameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneNumberInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const postcodeInput = document.getElementById('code');
  const unorderedList = document.getElementById('infoPreview');
  const block = document.getElementById('block');

  let submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submit);

  let editBtn = document.getElementById('editBTN');
  editBtn.addEventListener('click', edit);

  let continueBtn = document.getElementById('continueBTN');
  continueBtn.addEventListener('click', continueClick)

  function submit(event){
    event.preventDefault();

    let fullname = fullNameInput.value;
    let email = emailInput.value;
    let phonenumber = phoneNumberInput.value;
    let address = addressInput.value;
    let postcode = postcodeInput.value;

    //creating new elements and adding text to them
    let fullnameLi = document.createElement('li');
    fullnameLi.textContent = `Full Name: ${fullname}`;

    let emailLi = document.createElement('li');
    emailLi.textContent = `Email: ${email}`;

    let phonenumberLi = document.createElement('li');
    phonenumberLi.textContent = `Phone Number: ${phonenumber}`;

    let addressLi = document.createElement('li');
    addressLi.textContent = `Address: ${address}`;

    let postcodeLi = document.createElement('li');
    postcodeLi.textContent = `Postal Code: ${postcode}`;

    // appending the li to the new input
    if (fullname !== '' && email !== ''){
      unorderedList.appendChild(fullnameLi);
      unorderedList.appendChild(emailLi);
      unorderedList.appendChild(phonenumberLi);
      unorderedList.appendChild(addressLi);
      unorderedList.appendChild(postcodeLi);

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

      fullNameInput.value = '';
      emailInput.value = '';
      phoneNumberInput.value = '';
      addressInput.value = '';
      postcodeInput.value = '';
    }
  }

  function edit(){
    let name = unorderedList.children[0].textContent.split('Full Name:')[1];
    let email = unorderedList.children[1].textContent.split('Email: ')[1];
    let number = unorderedList.children[2].textContent.split('Phone Number: ')[1];
    let address = unorderedList.children[3].textContent.split('Address: ')[1];
    let postcode = unorderedList.children[4].textContent.split('Postal Code: ')[1];
    
    fullNameInput.value = name;
    emailInput.value = email;
    phoneNumberInput.value = number;
    addressInput.value = address;
    postcodeInput.value = postcode;

    unorderedList.innerHTML = '';

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  }

  function continueClick(){
    block.innerHTML = ''; // ?
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    block.appendChild(h3);
  }
}
