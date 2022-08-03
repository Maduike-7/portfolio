const button = document.getElementById('hamburger');
const nav = document.getElementById('menu');



button.addEventListener('click', () => 
{
    button.classList.toggle('open')
    nav.classList.toggle('hidden')
}
)
