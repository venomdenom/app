document.addEventListener('DOMContentLoaded', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/get_anime.php', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const animeList = document.getElementById('anime-list');
            const data = JSON.parse(this.responseText);
            data.forEach(anime => {
                const animeItem = document.createElement('div');
                animeItem.classList.add('anime-item');
                animeItem.innerHTML = `
                    <h3>${anime.title_name}</h3>
                    <p>${anime.description}</p>
                    <img src="${anime.image_url}" alt="${anime.title}">
                `;
                animeList.appendChild(animeItem);
            });
        }
    };
    xhr.send();
});
