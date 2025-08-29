console.log("RSHAN Portfolio Website Loaded Successfully");

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Typewriter Effect for Text
let i = 0;
let text = "Welcome to my Portfolio Website! My Name is Ryan Shanahan.";
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Enhanced page loading with animations
window.addEventListener('load', function() {
  typeWriter();
  
  // Add loading animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
  
  // Add loading animation to skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, index * 150);
  });
});

// Full screen video functions
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

// Full screen image function
function openImageFullscreen(img) {
  if (img.requestFullscreen) {
    img.requestFullscreen();
  } else if (img.webkitRequestFullscreen) { // Safari
    img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { // IE11
    img.msRequestFullscreen();
  }
}

// Dark mode toggle with enhanced functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;
  
  // Check for saved dark mode preference
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
  }

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    
    // Save preference to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem('darkMode', 'enabled');
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem('darkMode', null);
      toggleButton.textContent = "🌙 Dark Mode";
    }
    
    // Add click animation
    toggleButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
      toggleButton.style.transform = 'scale(1)';
    }, 150);
  });
});

// Scroll to top function for contact section
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Enhanced contact section interaction
document.addEventListener('DOMContentLoaded', function() {
  const contactSection = document.querySelector('#contact');
  
  if (contactSection) {
    contactSection.addEventListener('click', function(e) {
      // Only show alert if clicking on the section itself, not on links
      if (e.target === contactSection || e.target.tagName === 'P') {
        showContactMessage();
      }
    });
  }
});

function showContactMessage() {
  // Create a custom notification instead of alert
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    transform: translateX(400px);
    transition: transform 0.3s ease;
    max-width: 300px;
    font-weight: 500;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <span style="font-size: 1.2rem;">👋</span>
      <div>
        <div style="font-weight: 600; margin-bottom: 5px;">Thank you for visiting!</div>
        <div style="font-size: 0.9rem;">Feel free to reach out to any of my socials listed below!</div>
      </div>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });
});

// Enhanced hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Smooth reveal animation for skills
document.addEventListener('DOMContentLoaded', function() {
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Add loading state for media elements
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');
  const images = document.querySelectorAll('img');
  
  videos.forEach(video => {
    video.addEventListener('loadstart', function() {
      this.style.opacity = '0.7';
    });
    
    video.addEventListener('canplay', function() {
      this.style.opacity = '1';
    });
  });
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    img.style.opacity = '0.8';
    img.style.transition = 'opacity 0.3s ease';
  });
});

// Enhanced navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
  nav ul li a.active {
    background-color: rgba(255, 255, 255, 0.3) !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
  }
`;
document.head.appendChild(style);