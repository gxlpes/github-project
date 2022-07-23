const containerResultsRepos = document.querySelector(".containerResultsRepos");

document.querySelector(".repos-btn").addEventListener("click", getGitHubUserRepos);

let x = 0;
let y = 5;

async function getGitHubUserRepos() {
  const url = `https://api.github.com/users/${input.value}/repos`;

  async function getUrl() {
    const response = await fetch(url);
    const dataRepos = await response.json();

    if (x < dataRepos.length) {
      const items = dataRepos.slice(x, y);

      x = x + 5;
      y = y + 5;

      console.log(items);

      items.forEach((repo) => {
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
  }
  getUrl();
}

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (clientHeight + scrollTop >= scrollHeight - 10) {
    getGitHubUserRepos();
  }
});
