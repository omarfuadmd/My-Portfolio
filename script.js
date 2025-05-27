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

  function type() {
    if (letterIndex < phrases[currentPhrase].length) {
      dynamicText.textContent += phrases[currentPhrase][letterIndex];
      letterIndex++;
      setTimeout(type, 100);
    } else {
      // Wait before moving to the next phrase
      setTimeout(() => {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        dynamicText.textContent = ''; // Clear text before next phrase
        letterIndex = 0;
        type();
      }, 2000); // pause after full phrase
    }
  }

  type();
}
