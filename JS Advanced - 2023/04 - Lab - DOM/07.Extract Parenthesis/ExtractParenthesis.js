function extract(content) {
    const text = document.getElementById(content).textContent;

    let regex = /\((.+?)\)/gm;

    const result = text.matchAll(regex);
    let res = [];
    
    for (const iterator of result) {
        res.push(iterator[1]);
    }

    return res.join('; ')
}