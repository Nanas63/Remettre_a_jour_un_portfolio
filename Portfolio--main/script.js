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


/* Mode light/dark */

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


/* loader */
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Simule un délai de chargement
    setTimeout(() => {
        loader.style.display = "none"; // Cache le loader
        content.style.display = "block"; // Affiche le contenu principal
    }, 3000); // 3 secondes
});


/* burger */
const burgerButton = document.getElementById("burger-button");
const menu = document.getElementById("menu");

burgerButton.addEventListener("click", () => {
    menu.classList.toggle("active"); // Active/désactive le menu
});



/* slider controllable */
const radios = document.querySelectorAll('.cs_anchor.radio');
let currentIndex = Array.from(radios).findIndex(radio => radio.checked);

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + radios.length) % radios.length;
  radios[currentIndex].checked = true;
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % radios.length;
  radios[currentIndex].checked = true;
});


/* agrandir l'image palmiers au click */

/* const image = document.getElementById("image");

        image.addEventListener("click", () => {
            // Ajoute ou enlève la classe "grande" pour agrandir/réduire l'image
            image.classList.toggle("grande");
        }); */


/* Boucle pour agrandir toutes les images au clic */

    const images = document.querySelectorAll(".image");

    images.forEach(image => {
    image.addEventListener("click", () => {
        // Ajoute ou enlève la classe "grande" pour agrandir/réduire l'image
        image.classList.toggle("grande");
    });
});