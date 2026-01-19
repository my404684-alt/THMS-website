// main.js

// 1. Smooth Scroll Reveal Effect
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.service-row');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}

// 2. Sample Destination Data for destination.html
const destinations = [
    { name: "Kyoto Temples", country: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" },
    { name: "Maasai Mara", country: "Kenya", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801" },
    { name: "Petra Ruins", country: "Jordan", img: "https://images.unsplash.com/photo-1579606030105-06a096c44289" }
    // You can add all 50 here
];

// 3. Simple Form Handling for Booking
const bookingForm = document.querySelector('.booking-form');
if(bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Request Sent! Our travel concierge will contact you within 24 hours.");
    });
}