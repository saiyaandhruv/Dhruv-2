// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the "Scroll to Top" button based on scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Function to scroll back to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Contact Form Validation
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent the form from submitting

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate form fields
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert("Your message has been sent successfully!");
        contactForm.reset();  // Reset form after successful submission
    }
});
