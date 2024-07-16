// script.js
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.nav-menu ul li.dropdown');
    const arrow = dropdown.querySelector('.arrow');
    const servicesLink = document.getElementById('services-link');

    arrow.addEventListener('click', function(event) {
        event.preventDefault();
        dropdown.classList.toggle('open');
    });

    // Prevent dropdown from closing when clicking inside it
    dropdown.addEventListener('click', function(event) {
        if (event.target !== servicesLink && event.target !== arrow) {
            event.stopPropagation();
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});
