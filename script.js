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


/* Full screen vid*/
function openFullscreenBank() {
  let video = document.getElementById("rsBankDemo");
  if (video.requestFullscreen) {
      video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE11
      video.msRequestFullscreen();
  }
}
/* Full screen vid*/
function openFullscreenMITM() {
  let video = document.getElementById("MITMDemo");
  if (video.requestFullscreen) {
      video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE11
      video.msRequestFullscreen();
  }
}
/* Full screen vid END*/

/* Full screen vid*/
function openFullscreenElemental() {
  let video = document.getElementById("ElementalVid");
  if (video.requestFullscreen) {
      video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // Safari
      video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { // IE11
      video.msRequestFullscreen();
  }
}
/* Full screen vid END*/


/* Full screen pic*/
function openImageFullscreen(img) {
  if (img.requestFullscreen) {
      img.requestFullscreen();
  } else if (img.webkitRequestFullscreen) { // Safari
      img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { // IE11
      img.msRequestFullscreen();
  }
}
/* Full screen pic END*/

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