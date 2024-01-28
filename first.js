document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");

    const sectionColors = {
        home: '#00e5ff',
        about: '#c506b8d2',
        services: '#00fe08',
        contact: '#ff8000'
    };

    function smoothScroll(target) {
        const targetPosition = target.offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    navbar.addEventListener("click", function(event) {
        event.preventDefault();
        if (event.target.tagName === "A" && event.target.hash) {
            const targetId = event.target.hash.substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                smoothScroll(targetSection);
            }
        }
    });

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionId = section.id;
            const sectionPosition = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionHeight) {
                navbar.style.backgroundColor = sectionColors[sectionId];
            }
        });

        if (scrollPosition === 0) {
            navbar.style.backgroundColor = 'black';
        }
    });
});
