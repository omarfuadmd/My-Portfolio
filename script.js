
// Navbar toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Dynamic typing effect on home page
const dynamicText = document.querySelector('.dynamic-text');

if (dynamicText) {
  const phrases = ['Frontend Developer', 'Web Designer'];
  let currentPhrase = 0;
  let letterIndex = 0;
  let deleting = false;
  let delay = 100;
  
  function type() {
    if (!deleting) {
      dynamicText.textContent += phrases[currentPhrase][letterIndex];
      letterIndex++;
      if (letterIndex === phrases[currentPhrase].length) {
        deleting = true;
        delay = 1500;
      } else {
        delay = 100;
      }
    } else {
      dynamicText.textContent = phrases[currentPhrase].substring(0, letterIndex - 1);
      letterIndex--;
      if (letterIndex === 0) {
        deleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        delay = 500;
      } else {
        delay = 50;
      }
    }
    setTimeout(type, delay);
  }
  type();
}