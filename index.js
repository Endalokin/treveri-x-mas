
const day1 = document.getElementById("day1")
const days = document.querySelectorAll(".grid-item")
const today = new Date();

function openWindow (e) {
    e.preventDefault();
    const thisDay = this.id.slice(3)
    if (thisDay > today.getDate()) {
        alert("not quite there yet")
    } else {
        this.classList.add("hidden")
    }
}

for (let day of days) {
    day.addEventListener("click", openWindow)
}