const ul = document.querySelector("ul");

async function getGitHubAPI() {
  const result = await fetch("https://api.github.com/users/gxlpes");
  const resultConverted = await result.json();
  console.log(resultConverted);
}

getGitHubAPI();
