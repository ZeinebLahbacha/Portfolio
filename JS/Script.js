// Sélectionne la div "about"
const aboutSection = document.querySelector("#about");

// Crée l'observateur
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Ajoute la classe show
        } else {
            entry.target.classList.remove("show"); // Retire la classe show si on remonte
        }
    });
});

// Active l'observation
observer.observe(aboutSection);