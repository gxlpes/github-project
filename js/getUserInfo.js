// document.querySelector("button").addEventListener("click", getGitHubAPI);

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
const btnSearch = document.querySelector(".btn-search");

const user = document.querySelector(".githubUser");
const username = document.querySelector(".githubUserName");
const gitbio = document.querySelector(".githubBio");
const repo = document.querySelector(".githubRepo");
const joined = document.querySelector(".githubJoin");
const update = document.querySelector(".githubUpdate");
const website = document.querySelector(".githubWebsite");
const twitter = document.querySelector(".githubTwitter");
const company = document.querySelector(".githubCompany");
const locat = document.querySelector(".githubLocation");

btnSearch.addEventListener("click", getGitHubUserInfo);
document.body.addEventListener("keypress", function (event) {
  if (event.key == "Enter") btnSearch.click();
});

let img = document.createElement("img");
let photo = document.querySelector(".githubPhoto");

async function getGitHubUserInfo() {
  const url = `https://api.github.com/users/${input.value}`;

  async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();

    img.src = data.avatar_url;
    photo.appendChild(img);

    const date1 = new Date(data.created_at);
    const month1 = date1.toLocaleString("en-US", { month: "short" });
    const year1 = date1.getFullYear();

    const date2 = new Date(data.updated_at);
    const month2 = date2.toLocaleString("en-US", { month: "short" });
    const year2 = date2.getFullYear();

    user.innerHTML = data.name;
    username.innerHTML = data.login;
    gitbio.innerHTML = data.bio;
    repo.innerHTML = `${data.public_repos} repositories created`;
    joined.innerHTML = `Joined in ${month1}/${year1}`;
    update.innerHTML = `Last update in ${month2}/${year2}`;
    website.innerHTML = data.blog === "" || data.blog === null ? "No website" : data.blog;
    twitter.innerHTML = data.twitter_username === "" || data.twitter_username === null ? "No Twitter" : data.twitter_username;
    company.innerHTML = data.company === "" || data.company === null ? "No website" : data.company;
    locat.innerHTML = data.location === " " || data.location === null ? "No location" : data.location;
  }
  getUrl();
}
