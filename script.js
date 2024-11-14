// Use EmailJS to send emails from HR's web form :

(function () {
    emailjs.init("S74Gp5015i6bp0WlD"); // Initialize EmailJS with your public key
})();

document.getElementById('work-request-form').addEventListener('submit',
    function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data                                                    
        const name = document.getElementById('from_name').value;
        const email = document.getElementById('from_email').value;
        const number = document.getElementById('from_number').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;


        console.log('Sending email with the following details:', { name, email, number, subject, message });

        // Send email via EmailJS
        emailjs.send('service_twwc50h', 'template_8u8wxfi', {
            name: name,
            email: email,
            number: number,
            subject: subject,
            message: message
        })
            .then(function (response) {
                alert('Email sent successfully!');
            }, function (error) {
                console.error('Failed to send email:', error);
                alert('Failed to send email. Please try again.');
            });
    }, { passive: false });


