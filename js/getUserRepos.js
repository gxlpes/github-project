const containerResultsRepos = document.querySelector(".containerResultsRepos");

document.querySelector(".repos-btn").addEventListener("click", getGitHubUserRepos);

let x = 0;
let y = 5;

async function getGitHubUserRepos() {
  const url = `https://api.github.com/users/${input.value}/repos`;

  async function getUrl() {
    const response = await fetch(url);
    const dataRepos = await response.json();
    console.log(dataRepos);

    if (x < dataRepos.length) {
      const items = dataRepos.slice(x, y);

      x = x + 5;
      y = y + 5;

      items.forEach((repo) => {
        const list = document.createElement("ul");
        list.classList.add("lang-container");

        const langsRepoUrl = `https://api.github.com/repos/${input.value}/${repo.name}/languages`;

        async function getReposLang() {
          const responseLangs = await fetch(langsRepoUrl);
          const langsRepos = await responseLangs.json();
          const langsReposArray = await Object.keys(langsRepos);

          const html = `<div class="repo-container">
          <h1  class="repo-title">${repo.name}</h1>
          <p class=" repo-desc">${repo.description ? repo.description : "No description."}</p>
          <a target="_blank" href=${repo.homepage ? repo.homepage : "#"}>${repo.homepage ? "Live demo" : "No live demo."}</a>
          
          <div class="bottom-repo">

          <p class="repo-main"> <svg class="svg-repo" viewBox="0 0 20 20">
          <path d="M5.719 14.75a.997.997 0 0 1-.664-.252L-.005 10l5.341-4.748a1 1 0 0 1 1.328 1.495L3.005 10l3.378 3.002a1 1 0 0 1-.664 1.748zm8.945-.002L20.005 10l-5.06-4.498a.999.999 0 1 0-1.328 1.495L16.995 10l-3.659 3.252a1 1 0 0 0 1.328 1.496zm-4.678 1.417 2-12a1 1 0 1 0-1.972-.329l-2 12a1 1 0 1 0 1.972.329z"/>
           </svg></p> 
           
          <a class="repo-link" href="${repo.html_url}" target="_blank"><svg class="svg-repo" viewBox="0 0 32 32">
          <path d="M16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641 1.281-.355 2.641-.532 4-.541 1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/>
          </svg></a>

         </div>

          </div>`;

          containerResultsRepos.insertAdjacentHTML("beforeend", html);

          const repoLangContainer = document.querySelectorAll(".repo-main");

          repoLangContainer.forEach(
            (container) => container.appendChild(list),

            langsReposArray.forEach((lang) => {
              const listItem = document.createElement("li");
              listItem.classList.add("lang-item");
              listItem.innerText = lang;
              list.appendChild(listItem);
            })
          );
        }
        getReposLang();
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
