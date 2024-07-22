document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = document.getElementById('search-query').value;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/api/search_anime.php?q=${query}`, true);
        xhr.onload = function() {
            if (this.status === 200) {
                const searchResults = document.getElementById('search-results');
                searchResults.innerHTML = '';
                const data = JSON.parse(this.responseText);
                data.forEach(anime => {
                    const animeItem = document.createElement('div');
                    animeItem.classList.add('anime-item', 'col-md-4');
                    animeItem.innerHTML = `
                        <h3>${anime.title_name}</h3>
                        <p>${anime.description}</p>
                        <img src="${anime.image_url}" alt="${anime.title_name}">
                    `;
                    searchResults.appendChild(animeItem);
                });
            }
        };
        xhr.onerror = function() {
            console.error('Ошибка сети при выполнении запроса');
        };
        xhr.send();
    });
});
