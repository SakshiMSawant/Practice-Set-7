document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "blue"

Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "greenyellow";
})     