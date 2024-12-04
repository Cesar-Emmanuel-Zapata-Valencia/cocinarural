document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate sending an email
    alert(`Mensaje enviado:\nNombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`);
});
