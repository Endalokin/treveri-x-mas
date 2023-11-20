var elements = document.querySelectorAll(".door");
const today = new Date();

for (let element of elements) {
  element.addEventListener("click", toggleDoor);
}

function toggleDoor() {
  var parent = this.parentElement;
  let currentDay = days.find((d) => {
    return d.id == parent.id;
  });
  const thisDay = currentDay.day;
  if (thisDay > today.getDate()) {
    alert("Du musst dich noch ein wenig gedulden!");
  } else {
    this.setAttribute("onmouseenter", "");
    this.setAttribute("onmouseleave", "");
    this.classList.toggle("openable");
    this.classList.toggle("doorOpen");

    console.log(this);
    let imgUrl = currentDay.img;
    let linkUrl = currentDay.link;
    if (this.classList.value.match("doorOpen")) {
      setTimeout(() => {
        parent.style.backgroundImage = `url(${imgUrl})`;
      }, 100);
      setTimeout(() => {
        parent.parentElement.setAttribute("href", linkUrl);
        parent.parentElement.setAttribute("target", "_blank");
      }, 400);
    } else {
      parent.parentElement.setAttribute("href", "#");
      parent.parentElement.setAttribute("target", "");
      setTimeout(() => {
        parent.style.backgroundImage = null;
      }, 100);
    }
  }
}
