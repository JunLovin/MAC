const moon = document.querySelector('#moon')
const body = document.querySelector('body')

moon.onclick = function(){
    moon.classList.toggle('active')
    body.classList.toggle('active')
}