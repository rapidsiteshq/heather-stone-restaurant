document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');

            if (!name || !phone || !email || !message) {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.classList.add('error');
                formMessage.classList.remove('success');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.classList.add('error');
                formMessage.classList.remove('success');
                return;
            }

            const mailtoLink = `mailto:info@rapidsites.eu?subject=Table Reservation / Enquiry from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0DPhone: ${encodeURIComponent(phone)}%0DEmail: ${encodeURIComponent(email)}%0D%0DMessage:%0D${encodeURIComponent(message)}`;

            window.location.href = mailtoLink;

            setTimeout(() => {
                formMessage.textContent = 'Thank you! Your message has been sent. We will get back to you shortly.';
                formMessage.classList.add('success');
                formMessage.classList.remove('error');
                contactForm.reset();
            }, 500);
        });
    }
});