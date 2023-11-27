var elements = document.querySelectorAll(".door");
const today = new Date();

for (let element of elements) {
  element.addEventListener("click", toggleDoor);
  element.addEventListener("mouseenter", sneakDoor);
  element.addEventListener("mouseleave", sneakDoor);
}

function checkDay(currentDay, sendAlert = false) {
  const thisDay = currentDay.day;
  if (thisDay > today.getDate() || today.getMonth() != 11) {
    sendAlert && alert("Du musst dich noch ein wenig gedulden!");
    return true;
  }
}

function sneakDoor() {
  var parent = this.parentElement;
  let currentDay = days.find((d) => {
    return d.id == parent.id;
  });
  if (checkDay(currentDay)) return;
  this.classList.toggle("openable");
}

function toggleDoor(e) {
  e.preventDefault();
  var parent = this.parentElement;
  let currentDay = days.find((d) => {
    return d.id == parent.id;
  });
  if (checkDay(currentDay, true)) return;
  this.removeEventListener("mouseenter", sneakDoor);
  this.removeEventListener("mouseleave", sneakDoor);
  this.classList.toggle("openable");
  this.classList.toggle("doorOpen");

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
