module.exports = (foundCat, breedsArray) => {
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
        <form action="/edit-cat/${foundCat.id}" method="post" class="cat-form">
            <h2>Edit Cat</h2>
            <label for="name">Name</label>
            <input type="text" id="name" value="${foundCat.name}" name="name">
            <label for="description">Description</label>
            <textarea id="description" name="description">${foundCat.description}</textarea>
            <label for="image">Image</label>
            <input type="text" id="image" value="${foundCat.img}" name="image">
            <label for="group">Breed</label>
            <select id="group" value="${foundCat.breed}" name="breed">
            ${breedsArray.map(breed => {
                if (breed === foundCat.breed){
                    return `<option value="${breed}" selected>${breed}</option>`
                } else {
                    return `
                <option value="${breed}">${breed}</option>
                `
                }
            })}
            </select>
            <button type="submit">Edit Cat</button>
        </form>
    </main>
</body>

</html>
    `
}