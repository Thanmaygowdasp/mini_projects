const btn = document.getElementById("hoverBtn");
const leftNum = document.getElementById("leftNum");
const rightNum = document.getElementById("rightNum");
const userinput = document.getElementById("userinput")
const submit = document.getElementById("submitBtn")
const Warning = document.getElementById("Warning")
const result = document.getElementById("result")
const Differencedisplay = document.getElementById("Difference")
const reset = document.getElementById("reset")

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
let numberGenerated = false;
btn.addEventListener("click", ()=>{
    if(!numberGenerated){
        generated_number = Math.floor(Math.random()*100)+1
        console.log(generated_number)
        numberGenerated = true
        if(numberGenerated){
            btn.innerText = "Generated"
            btn.style.color = "rgb(188, 188, 188)"
        }
    }else{
        console.log(generated_number)
    }
})
let chances = 3
function guessing_answer(){
    if(chances>0){
        if(user_enter_number == generated_number){
            reset.innerText = "You Won!!"
            result.style.display = "inline"
            Warning.style.opacity = "0"
            submit.style.display = "none"
            reset.style.display = "block"
            reset.innerText = "RESET"
            reset.style.marginTop = "25px"
        }else{
            console.log("none")
        }
        chances = chances - 1
        Warning.innerText = `You Left With ${chances} chances`
        if(chances == 0){
            submit.style.display = "none"
            Warning.innerText = `Sorry Bro! number was ${generated_number} Reset again`
            Differencedisplay.style.display = "none"
            reset.style.display = "block"
        }
    }
}
let difference_of_comp_and_user = 0
function difference(){
    difference_of_comp_and_user = Math.abs(generated_number - user_enter_number)
    console.log(difference_of_comp_and_user)
    if (difference_of_comp_and_user > 50){
        Differencedisplay.innerText = "Your Too High"
    }else if(difference_of_comp_and_user > 25){
        Differencedisplay.innerText = "Your High"
    }
    else if(difference_of_comp_and_user > 15){
        Differencedisplay.innerText = "Your near"
    }else if(difference_of_comp_and_user > 10){
        Differencedisplay.innerText = "Your Close"
    }else if(difference_of_comp_and_user == 0){
        Differencedisplay.style.display = "none"
        result.innerText = "You WON!!"
    }
}
function resetfun(){
    numberGenerated = false
    btn.innerText = "Generate Number"
    btn.style.color = "rgb(0, 0, 0)"
    submit.style.display = "inline"
    Differencedisplay.style.display = "block"
    reset.style.display = "none"
    chances = 3
    Warning.innerText = `You Left With ${chances} chances`
    Differencedisplay.innerText = ""
    userinput.value = ""
    result.innerText = ""
    Warning.style.opacity = "1"
}
reset.addEventListener("click", ()=>{
    resetfun()
})
let user_enter_number = 0
submit.addEventListener("click", ()=>{
    user_enter_number = Number(userinput.value)
    guessing_answer()
    difference()
})