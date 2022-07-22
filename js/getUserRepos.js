const containerResultsRepos = document.querySelector(".containerResultsRepos");

document.querySelector(".repos-btn").addEventListener("click", getGitHubUserRepos);

async function getGitHubUserRepos() {
  const url = `https://api.github.com/users/${input.value}/repos`;

  async function getUrl() {
    const response = await fetch(url);
    const dataRepos = await response.json();

    dataRepos.forEach((repo) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = repo.name;

      containerResultsRepos.appendChild(paragraph);
    });
  }
  getUrl();
}
