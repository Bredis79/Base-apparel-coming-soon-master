let input = document.querySelector("#email")
let submit = document.querySelector(".btn")
let icon_error = document.querySelector(".icon_error")
let p = document.createElement("p")
let error = document.querySelector(".error_block")

submit.addEventListener("click", function(event){
     
    if(input.value.includes('@') === false || input.value.includes(".") === false) {
        event.preventDefault()
        input.style.border = "2px solid red"
        icon_error.style.display = "block"
        p.textContent = "Please provide a valid email"
        error.appendChild(p)
   } 
})

