// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        this.classList.toggle('open');
    });
    
    // Fermer le menu lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            mobileMenuBtn.classList.remove('open');
        });
    });

    
    // Animation au défilement
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-item, .subject, .gallery-item, .value, .team-member, .teacher');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial state for animation
    const animatedElements = document.querySelectorAll('.service-item, .subject, .gallery-item, .value, .team-member, .teacher');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

// Gestion des formulaires
document.addEventListener('DOMContentLoaded', function() {
    // Formulaire GekDesign
    const gekdesignForm = document.getElementById('gekdesign-form');
    if (gekdesignForm) {
        gekdesignForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendFormData(this, 'Demande de devis GekDesign');
        });
    }
    
    // Formulaire HomeStudy
    const homestudyForm = document.getElementById('homestudy-form');
    if (homestudyForm) {
        homestudyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendFormData(this, 'Réservation de cours HomeStudyAcademy');
        });
    }
    
    // Formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendFormData(this, 'Message de contact');
        });
    }
});

function sendFormData(form, subject) {
    const formData = new FormData(form);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // Ajouter le sujet à l'objet
    formObject['formSubject'] = subject;
    
    // Envoyer les données par email (fonctionnalité implémentée dans email.js)
    sendEmail(formObject);
    
    // Réinitialiser le formulaire
    form.reset();
    
    // Afficher un message de confirmation
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
}