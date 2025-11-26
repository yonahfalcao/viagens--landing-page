const sections = document.querySelectorAll("section");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            sec.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
