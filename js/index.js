// document.querySelector("button").addEventListener("click", getGitHubAPI);

// document.body.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     getGitHubAPI();
//   }
// });

// async function getGitHubAPI() {
//   const userInput = document.querySelector("input").value;
//   const result = await fetch(`https://api.github.com/users/${userInput}`);
//   const resultConverted = await result.json();
//   if (resultConverted.message) {
//     console.log("error");
//   } else {
//     console.log(resultConverted);
//   }
// }

const input = document.querySelector("input");
const btnSearch = document.querySelector("button");

// const photo = document.querySelector(".githubPhoto");
// const user = document.querySelector(".githubUser");
// const username = document.querySelector(".githubUserName");
// const gitbio = document.querySelector(".githubBio");
// const repo = document.querySelector(".githubRepo");
// const joined = document.querySelector(".githubJoin");
// const update = document.querySelector(".githubUpdate");
// const location = document.querySelector(".githubLocation");
// const website = document.querySelector("githubWebsite");
// const twitter = document.querySelector(".githubTwitter");
// const company = document.querySelector(".githubCompany");

btnSearch.addEventListener("click", getGitHubAPI);

async function getGitHubAPI() {
  const url = `https://api.github.com/users/${input.value}`;
  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }
  getUrl();
}
