let menuicon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuicon.onclick = () => {
    menuicon.classList.toggle('bxs-x-circle');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsettop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active')
            })
        }
    })

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.screenY > 100)

    menuicon.classList.remove('bxs-x-circle')
    navbar.classList.remove('active')
}

const sr = ScrollReveal({
    distance: '80px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home-content, heading', {origin: 'top'})
sr.reveal('.home-img, .services-container, portfolio-box, .contact form', {origin: 'bottom'})
sr.reveal('.home-content h1, .about-img', {origin: 'left'})
sr.reveal('.home-content p, .about-content', {origin: 'right'})