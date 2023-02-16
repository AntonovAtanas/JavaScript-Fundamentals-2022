function getArticleGenerator(articles) {

    let array = articles.slice();
    let articleDiv = document.getElementById('content');

    return () => {
        if (array.length > 0) {
            let currentArticle = array.shift();
            let articleElement = document.createElement('article');
            articleElement.textContent = currentArticle;
            articleDiv.appendChild(articleElement)
        }
    }
}
