let important = document.getElementsByClassName('important')
for (let element of important) {
    element.title = "This is an important item";
}

document.querySelectorAll('img')

const pictures = document.querySelectorAll("img");

for (let dk of pictures) {
  if (!dk.classList.contains("important")) {
    dk.style.display = "none";
  }
}