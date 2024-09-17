// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openProject(projectId) {
    alert(`You clicked on ${projectId}!`);
}

// Contact Form Submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
});

// Scroll Animations for Project Cards
const projects = document.querySelectorAll('.project-item');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    projects.forEach((project) => {
        const projectTop = project.getBoundingClientRect().top;
        if (projectTop < windowHeight - revealPoint) {
            project.classList.add('visible');
        } else {
            project.classList.remove('visible');
        }
    });
}

function goToProject() {
    window.location.href = "project.html";  // Redirect to project page
}

// Listen for Scroll Events
window.addEventListener('scroll', revealOnScroll);

// Initial check when the page loads
revealOnScroll();
