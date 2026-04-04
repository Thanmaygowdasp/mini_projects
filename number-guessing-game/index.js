const btn = document.getElementById("hoverBtn");
const leftNum = document.getElementById("leftNum");
const rightNum = document.getElementById("rightNum");
const userinput = document.getElementById("userinput")
const submit = document.getElementById("submitBtn")
const Warning = document.getElementById("Warning")

let leftInterval;
let rightInterval;

function animateNumber(element, target, side) {
    let count = 0;

    const interval = setInterval(() => {
        count++;
        element.textContent = count;

        if (count >= target) {
            clearInterval(interval);
        }
    }, 15);

    if (side === "left") leftInterval = interval;
    if (side === "right") rightInterval = interval;
}

btn.addEventListener("mouseenter", () => {
    animateNumber(leftNum, 100, "left");
    animateNumber(rightNum, 100, "right");
});

btn.addEventListener("mouseleave", () => {
    clearInterval(leftInterval);
    clearInterval(rightInterval);

    leftNum.textContent = "";
    rightNum.textContent = "";
});
let generated_number = 0
btn.addEventListener("click", ()=>{
    generated_number = Math.floor(Math.random()*100)+1
    console.log(generated_number)
})
let chances = 3
function guessing_answer(){
    if(chances>0){
        if(user_enter_number == generated_number){
            console.log("Done")
            Warning.innerText = "You Won Bro"
        }else{
            console.log("none")
        }
        chances = chances - 1
        Warning.innerText = `You Left With ${chances} chances`
        if(chances == 0){
            submit.style.display = "none"
            Warning.innerText = "Please Reset Bro"
        }
    }
}
let user_enter_number = 0
submit.addEventListener("click", ()=>{
    user_enter_number = Number(userinput.value)
    guessing_answer()
})