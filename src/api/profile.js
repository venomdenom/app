document.addEventListener('DOMContentLoaded', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/get_user_profile.php', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const profile = document.getElementById('profile');
            const data = JSON.parse(this.responseText);
            profile.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">${data.username}</h2>
                        <h3 class="card-subtitle mb-2 text-muted">Anime List</h3>
                        <ul class="list-group list-group-flush">
                            ${data.anime_list.map(anime => `
                                <li class="list-group-item">
                                    <h5>${anime.title_name}</h5>
                                    <p>Score: ${anime.score}</p>
                                    <img src="${anime.image_url}" alt="${anime.title_name}" class="img-fluid">
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
    };
    xhr.send();
});
