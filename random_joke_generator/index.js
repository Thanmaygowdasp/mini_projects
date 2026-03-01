let compnumber = document.getElementById("compnumber")
let compbtn = document.getElementById("randomgen")

let usernumber = document.getElementById("usernumber")
let userbtn = document.getElementById("increase")
let restbtn = document.getElementById("reset")

let message = document.getElementById("message")


let msgjoke = document.getElementById("joke")
let youtube = document.getElementById("youtube")

let generated = 0
compbtn.addEventListener("click", function(){
    generated = Math.floor(Math.random() * 10)+1
    compnumber.textContent = "Start Increaing"
})

let usernumberjs = 0

userbtn.addEventListener("click", function(){
    usernumberjs += 1
    usernumber.textContent = usernumberjs

    checkresult()
    if(usernumberjs>generated){
        userbtn.disabled = true
        userbtn.textContent = "You Moved Wrong please Generate First" 
        restbtn.style.display = "block"
    }
})

restbtn.addEventListener("click", function(){
    usernumberjs = 0
    generated = 0
    usernumber.textContent = 0
    compnumber.textContent = 0

    userbtn.disabled = false
    document.body.style.backgroundColor = "Green"
    message.textContent = ""

    userbtn.textContent = "Increase"
    document.body.style.backgroundColor = "bisque"  
    restbtn.style.display = "none"
    youtube.style.display = "none"
    
    msgjoke.textContent = ""
})

function checkresult(){

    if(generated == 0){
        message.textContent = "generate the number"
        return
    }

    if(usernumberjs === generated){
            document.body.style.backgroundColor = "#00ffb3";
            message.textContent = "You Won!!";
            compnumber.textContent = generated

            userbtn.disabled = true
            userbtn.textContent = "Please Reset"

            restbtn.style.display = "block"

            let joke = getjokes()

            msgjoke.textContent = joke

            youtube.style.display = "flex"


        }

    if(usernumberjs < generated){
        let difference = generated - usernumberjs;

        if(difference>8){
            message.textContent = "Your Far";
        }else if(difference>5){
            message.textContent = "Getting closer";
        }else if(difference>3){
            message.textContent = "Very close";
        }else {
            message.textContent = "Almost there";
        }
    }
}

let jokes = [
    "Why don’t programmers like nature? It has too many bugs 🐛",
    "Why do Java developers wear glasses? Because they don’t C# 😆",
    "Debugging: Being the detective in a crime movie where you are also the murderer 🕵️‍♂️",
    "I would tell you a UDP joke… but you might not get it 😂",
    "There are 10 types of people in the world: those who understand binary and those who don’t 😎"
];

function getjokes(){
    let randomidx = Math.floor(Math.random()* jokes.length)
    return jokes[randomidx]
}


