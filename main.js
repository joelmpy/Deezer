let text = document.querySelector(".first-text")
text.innerHTML = "bonjour a tous ici javascript"

let body = document.querySelector('body');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function(){
    body.classList.toggle('open')
})



// let text = "JavaScript est un langage de programmation qui permet de créer des sites web interactifs et dynamiques. Il est l'un des principaux langages utilisés pour le développement web et est très populaire auprès des développeurs. JavaScript peut être utilisé pour créer des applications web, des jeux, des interfaces utilisateur et bien plus encore. Il peut être intégré à d'autres langages tels que HTML et CSS pour créer des sites web plus complexes et riches en fonctionnalités.";

// console.log(text);