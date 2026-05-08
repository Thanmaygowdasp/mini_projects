const habitadderbtn = document.getElementById("habitadder")
const infogather = document.getElementById("infogather")
const habitsaver = document.getElementById("habitsaver")
const habittracker = document.getElementById("habittracker")
const habitname = document.getElementById("habitname")
const reason = document.getElementById("reason")
const habitlist = document.getElementById("habitlist")
let habits = JSON.parse(localStorage.getItem("habits")) || []


habitsaver.addEventListener("click", () => {

    const name = habitname.value
    const why = reason.value

     if (name == "" || why == "") return

    
    const habit = {
        name: name,
        why: why
    }

    habits.push(habit)
    localStorage.setItem("habits", JSON.stringify(habits))

    displayhabits()

    habitname.value = "";
    reason.value = "";
})
function displayhabits() {
    habitlist.innerHTML = ""

    habits.forEach(h => {
        const card = document.createElement("div")
        card.className = "habitcard"
        card.innerHTML = `
        <h3>${h.name}</h3>
        <p>${h.why}</p>
    `
        habitlist.appendChild(card)
    });
     infogather.classList.remove("show")
}


habitadderbtn.addEventListener("click", () => {
    infogather.classList.toggle("show")
})