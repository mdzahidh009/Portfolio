const texts = ["Web Developer...", "Student...", "Intern..."];
let currentTextIndex = 0;
const textElement = document.querySelector('.text');

function typeWriterEffect() {
    const currentText = texts[currentTextIndex];
    let charIndex = 0;

    function type() {
        if (charIndex < currentText.length) {
            textElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(erase, 1500); // Adjust pause before erasing
        }
    }

    function erase() {
        if (textElement.textContent.length > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            setTimeout(erase, 50); // Adjust erasing speed here
        } else {
            currentTextIndex++;
            if (currentTextIndex >= texts.length) {
                currentTextIndex = 0;
            }
            setTimeout(typeWriterEffect, 500); // Adjust pause before starting next cycle
        }
    }

    type();
}

// Start the typewriter effect
typeWriterEffect();
