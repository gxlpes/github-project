const containerResultsRepos = document.querySelector(".containerResultsRepos");

document.querySelector(".repos-btn").addEventListener("click", getGitHubUserRepos);

async function getGitHubUserRepos() {
  const url = `https://api.github.com/users/${input.value}/repos`;

  async function getUrl() {
    const response = await fetch(url);
    const dataRepos = await response.json();

    dataRepos.forEach((repo) => {
      const html = `<h1>${repo.name}</h1>
      <p>${repo.description}</p>
      <p><a href=${repo.url}>Link</a></p>
      <p><a href=${repo.homepage}>Homepage</a><p>
      <p>${repo.language}</p>`;

      containerResultsRepos.insertAdjacentHTML("beforeend", html);
    });
  }
  getUrl();
}
