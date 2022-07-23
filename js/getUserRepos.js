const containerResultsRepos = document.querySelector(".containerResultsRepos");

document.querySelector(".repos-btn").addEventListener("click", getGitHubUserRepos);

async function getGitHubUserRepos() {
  const url = `https://api.github.com/users/${input.value}/repos`;

  async function getUrl() {
    const response = await fetch(url);
    const dataRepos = await response.json();

    dataRepos.forEach((repo) => {
      const html = `<div class="repo-container">
      <h1  class="repo-title">${repo.name}</h1>
      <p class=" repo-desc">${repo.description}</p>
      <p  class="repo-link>"<a href=${repo.url}>Link</a></p>
      <p  class="repo-live>"<a href=${repo.homepage}>Homepage</a><p>
      <p class=" repo-main">${repo.language}</p>
      <div id="pagination-wrapper"></div>
      </div>`;

      containerResultsRepos.insertAdjacentHTML("beforeend", html);
    });
  }
  getUrl();
}
