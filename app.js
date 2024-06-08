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
});
