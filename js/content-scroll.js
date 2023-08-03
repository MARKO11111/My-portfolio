const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav_link');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 480;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            links.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
