function solve() {
    let nameInput = document.querySelector('input[placeholder="Name"]');
    let hallInput = document.querySelector('input[placeholder="Hall"]');
    let priceInput = document.querySelector('input[placeholder="Ticket Price"]');
    let moviesList = document.getElementById('movies').children[1];
    let archiveList = document.getElementById('archive').children[1];

    document.getElementById('container').children[3].addEventListener('click', addMovie);
    document.getElementById('archive').children[2].addEventListener('click', clear);

    function addMovie(event) {
        event.preventDefault();
        if (nameInput.value.length > 0 && hallInput.value.length > 0 && priceInput.value.match(/\b[0-9]+/g)) {
            let li = document.createElement('li');
            let div = document.createElement('div');

            let movieNameSpan = document.createElement('span');
            movieNameSpan.textContent = nameInput.value;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hallInput.value}`;

            let priceStrong = document.createElement('strong');
            priceStrong.textContent = Number(priceInput.value).toFixed(2);

            let ticketsSold = document.createElement('input');
            ticketsSold.placeholder = 'Tickets Sold';

            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archive)

            li.appendChild(movieNameSpan);
            li.appendChild(hallStrong);
            li.appendChild(div);
            div.appendChild(priceStrong);
            div.appendChild(ticketsSold);
            div.appendChild(archiveButton);

            moviesList.appendChild(li);

            nameInput.value = '';
            hallInput.value = '';
            priceInput.value = '';
        }
    }

    function archive(event) {

        let ticketsSoldCount = event.target.parentElement.children[1];

        if (ticketsSoldCount.value.match(/\b[0-9]+/g)) {
            let li = document.createElement('li');

            let movieNameSpan = document.createElement('span');
            let movieName = event.target.parentElement.parentElement.children[0].textContent;
            movieNameSpan.textContent = movieName;

            let amountStrong = document.createElement('strong');
            let ticketsPrice = event.target.parentElement.children[0].textContent;
            amountStrong.textContent = `Total amount: ${(ticketsPrice * ticketsSoldCount.value).toFixed(2)}`

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteMovie);

            li.appendChild(movieNameSpan);
            li.appendChild(amountStrong);
            li.appendChild(deleteButton);

            archiveList.appendChild(li);
        }
        ticketsSoldCount.value = '';
        event.target.parentElement.parentElement.remove()
    }

    function deleteMovie(event) {
        event.target.parentElement.remove();
    }

    function clear() {
        archiveList.querySelectorAll('li').forEach(element => element.remove())
    }
}