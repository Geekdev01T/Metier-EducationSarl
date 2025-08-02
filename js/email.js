// Fonction pour envoyer des emails via EmailJS
function sendEmail(formData) {
    // Initialiser EmailJS avec votre User ID

    //emailjs.init('3K_e_CYBZRD0zpvbL'); // Remplacez par votre User ID EmailJS

    // Paramètres du service et du template
    const SERVICE_ID = 'service_gpjtrsk'; // Remplacez par votre Service ID
    const TEMPLATE_ID = 'template_tt3o1fj'; // Remplacez par votre Template ID
    
    // Envoyer l'email
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
        .then(function(response) {
            console.log('Email envoyé avec succès!', response.status, response.text);
        }, function(error) {
            console.log('Erreur lors de l\'envoi de l\'email:', error);
        });
}


// Note: Pour utiliser EmailJS:
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Ajoutez votre service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Remplacez les identifiants ci-dessus par les vôtres
// 5. Ajoutez le script EmailJS dans votre HTML: <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"></script>