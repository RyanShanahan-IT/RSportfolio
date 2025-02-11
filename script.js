console.log("RSHANportfolio Website Loaded Successfully");

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
/* Typewriter Effect for Text*/

let i = 0;
let text = "Welcome to my Portfolio Website! My Name is Ryan Shanahan.";
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
/* Typewriter Effect for Text END*/


/*clicking toggles dark mode, and the button text updates.*/
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  toggleButton.addEventListener("click", function () {
      body.classList.toggle("dark-mode");

      // Change button text dynamically
      if (body.classList.contains("dark-mode")) {
          toggleButton.textContent = "☀️ Light Mode";
      } else {
          toggleButton.textContent = "🌙 Dark Mode";
      }
  });
});
/*Dark mode button END*/


// Contact button alert
document.querySelector('#contact').addEventListener('click', () => {
  alert('Thank you for visiting! Feel free to reach out to any of my socials listed below!');
});