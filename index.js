document.querySelector("button").addEventListener("click", getGitHubAPI);

document.body.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    getGitHubAPI();
  }
});

async function getGitHubAPI() {
  const userInput = document.querySelector("input").value;
  const result = await fetch(`https://api.github.com/users/${userInput}`);
  const resultConverted = await result.json();
  if (resultConverted.message) {
    console.log("error");
  } else {
    console.log(resultConverted);
  }
}
