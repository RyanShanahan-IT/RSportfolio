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


/* Enhanced Typewriter Effect for Text */
let i = 0;
let text = "Welcome to my Portfolio Website! My Name is Ryan Shanahan.";
let cursorVisible = true;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeWriter, 100);
    } else {
        // Blinking cursor after typing is complete
        setInterval(() => {
            cursorVisible = !cursorVisible;
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                cursor.style.opacity = cursorVisible ? '1' : '0';
            }
        }, 500);
    }
}
window.onload = typeWriter;
/* Enhanced Typewriter Effect END */


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

/* Full screen vid*/
function openFullscreenHospital() {
  let video = document.getElementById("HospitalDemo");
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


// Project Filtering Functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease-in';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Show success message (in a real app, you'd send this to a server)
      alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
      
      // Reset form
      contactForm.reset();
    });
  }
});

// Enhanced Contact Section Interaction
document.addEventListener('DOMContentLoaded', function() {
  const contactSection = document.querySelector('#contact');
  
  if (contactSection) {
    contactSection.addEventListener('click', (e) => {
      // Only show alert if clicking on the section itself, not on form elements
      if (e.target === contactSection || e.target.tagName === 'H2') {
        alert('Thank you for visiting! Feel free to reach out using the contact form or my social links below!');
      }
    });
  }
});

// Video Loading States
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');
  
  videos.forEach(video => {
    const loadingElement = video.parentElement.querySelector('.video-loading');
    
    if (loadingElement) {
      // Hide loading when video can start playing
      video.addEventListener('canplay', () => {
        loadingElement.classList.add('hidden');
      });
      
      // Show loading if video needs to buffer
      video.addEventListener('waiting', () => {
        loadingElement.classList.remove('hidden');
        loadingElement.textContent = 'Buffering...';
      });
      
      // Hide loading when video can continue playing
      video.addEventListener('canplay', () => {
        loadingElement.classList.add('hidden');
      });
      
      // Handle errors
      video.addEventListener('error', () => {
        loadingElement.textContent = 'Video failed to load';
        loadingElement.style.background = 'rgba(255, 0, 0, 0.8)';
      });
    }
  });
});