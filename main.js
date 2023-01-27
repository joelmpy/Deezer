// let text = document.querySelector(".first-text")
// text.innerHTML = "bonjour a tous ici javascript"*

let body = document.querySelector('body')
let toggle = document.querySelector('.toggle')

toggle.addEventListener('click', function(){
    body.classList.toggle('open')
})