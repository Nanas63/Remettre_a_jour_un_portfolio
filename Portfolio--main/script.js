const nature = document.querySelector('#nature')
console.log(document)

nature.addEventListener('click',function(){

const paragraphe = document.querySelector('#paragraphe')
if (paragraphe) {
    paragraphe.remove()


}else{

    const paragraphe = document.createElement('p')
    const texte = 'Lorem ipsum'

    paragraphe.textContent = texte;
    paragraphe.id = 'paragraphe'
    nature.appendChild(paragraphe)
}
})


const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Vérifiez le mode enregistré dans le stockage local
const savedMode = localStorage.getItem('theme');
if (savedMode) {
    body.classList.add(savedMode);
} else {
    body.classList.add('light-mode'); // Mode par défaut
}

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});


/* document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simule un délai de chargement
    setTimeout(() => {
        loader.style.display = "none"; // Cache le loader
        content.style.display = "block"; // Affiche le contenu principal
    }, 3000); // 3 secondes
}); */



const burgerButton = document.getElementById("burger-button");
const menu = document.getElementById("menu");

burgerButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Active/désactive le menu
});