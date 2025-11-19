const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const profileContainer = document.getElementById("profile-container");

const API = "https://api.github.com/users/";

function showLoading() {
    profileContainer.style.display = "block";
    profileContainer.innerHTML = `
    <div class="error-card">
        <h3 style="color:#ff7b00">Carregando...</h3>
    </div>
  `;
}

async function fetchUser(username) {
    try {
        showLoading();

        const response = await fetch(API + username);

        if (!response.ok) throw new Error("Usuário não encontrado!");

        const data = await response.json();
        showProfile(data);

    } catch (error) {
        showError(error.message);
    }
}

function showProfile(user) {
    const { avatar_url, name, login, bio, public_repos, followers, following, html_url } = user;

    profileContainer.innerHTML = `
    <div class="profile-card">
        <img src="${avatar_url}" class="profile-avatar" alt="Foto de ${name || login}">
        
        <div class="profile-info">
            <h2>${name || login}</h2>
            <a href="${html_url}" target="_blank">@${login}</a>

            <p>${bio || "Usuário sem biografia."}</p>

            <div class="profile-stats">
                <div class="stat">
                    <span>${public_repos}</span>
                    Repositórios
                </div>
                <div class="stat">
                    <span>${followers}</span>
                    Seguidores
                </div>
                <div class="stat">
                    <span>${following}</span>
                    Seguindo
                </div>
            </div>
        </div>
    </div>
  `;
}

function showError(msg) {
    profileContainer.innerHTML = `
    <div class="error-card">
        <h3>⚠ Erro</h3>
        <p>${msg}</p>
    </div>
  `;
    profileContainer.style.display = "block";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = input.value.trim();

    if (username.length < 1) return;

    fetchUser(username);
    input.value = "";
});
