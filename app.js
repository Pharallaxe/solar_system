// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    const controls = document.querySelector('.controls');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        controls.classList.toggle('active');
    });


    // Sélectionner tous les boutons checkbox
    const checkboxes = document.querySelectorAll('.controls input[type="checkbox"]');

    // Ajouter un événement pour chaque checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', event => {
            const planet = event.target.value;
            const orbit = document.querySelector(`.${planet}-orbit`);
            const planetElement = document.querySelector(`.${planet}`);

            // Basculer l'affichage de l'orbite et de la planète
            if (event.target.checked) {
                orbit.style.display = 'block';
                planetElement.style.display = 'block';
            } else {
                orbit.style.display = 'none';
                planetElement.style.display = 'none';
            }
        });

        // Déclencher un événement de changement au chargement de la page
        // pour s'assurer que l'état initial est appliqué
        checkbox.dispatchEvent(new Event('change'));
    });

    const rootStyle = document.documentElement.style;
    const slider = document.getElementById('rapidity');
    const rapidityHtml = document.querySelector('label[for="rapidity"]');

    // Mettre à jour la variable CSS lorsque le slider change
    slider.addEventListener('input', function() {
        // Calculez la nouvelle durée en secondes
        const newTime = `${10/this.value}s`;
        // Mettez à jour la variable CSS
        rootStyle.setProperty('--revolution-temps', newTime);
        rapidityHtml.innerText = `Rapidité (${this.value})`
    });


    const asteroidNumber = 350; // Remplacez ce nombre par le nombre d'astéroïdes souhaité

    function addAsteroidsToBelt(asteroidNumber) {
        const beltOrbit = document.querySelector('.orbit.belt-orbit');
        
        for (let i = 0; i < asteroidNumber; i++) {
            const asteroid = document.createElement('div');
            asteroid.classList.add('asteroid');
            beltOrbit.appendChild(asteroid);
        }
    }
    
    addAsteroidsToBelt(asteroidNumber);

});
