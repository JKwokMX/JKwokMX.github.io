// ========== JavaScript for Personal Website ==========

document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.querySelector('.subscribe-btn');
    const emailInput = document.querySelector('input[type="email"]');

    subscribeButton.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email) {
            alert(`Thank you for subscribing, ${email}!`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
