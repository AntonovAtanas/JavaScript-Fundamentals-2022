module.exports = (foundCat) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/styles/site.js">
        <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
        <title>Cat Shelter</title>
    </head>
    
    <body>
        <header>
            <nav>
                <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/add-breed">Add Breed</a></li>
                <li><a href="/add-cat">Add Cat</a></li>
                </ul>
            </nav>
            <h1>Cat Shelter</h1>
        </header>
        <main>
            <form action="/shelter/cat/${foundCat.id}" method="post" class="cat-form">
                <h2>Shelter the cat</h2>
                <img src="${foundCat.img}" alt="">
                <label for="name">Name</label>
                <input type="text" id="name" value="${foundCat.name}" disabled>
                <label for="description">Description</label>
                <textarea id="description" disabled>${foundCat.description}</textarea>
                <label for="group">Breed</label>
                <select id="group" disabled>
                    <option value="Fluffy Cat">${foundCat.breed}</option>
                </select>
                <button>SHELTER THE CAT</button>
            </form>
        </main>
    </body>
    </html>
    `
}