function editElement(ref, oldText, updatedText) {
    let text = ref.textContent;

    while(text.includes(oldText)){
        text = text.replace(oldText, updatedText)
    }

     ref.textContent = text;
}
