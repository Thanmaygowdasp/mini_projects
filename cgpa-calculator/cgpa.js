let sub_add = document.getElementById("subject-add")
sub_add.addEventListener("click", function(){
    inputadded()
})
let maxsubjects = 8
function inputadded(){
    let container = document.getElementById("subjects")
    let inputs = document.querySelectorAll("input")
    if(inputs.length >= maxsubjects){
        alert("Are You Sure Adding more Subjects")
        return
    }
    let input = document.createElement("input")
    input.type = "number"
    input.placeholder = "Enter your Grade"
    container.appendChild(input)
}