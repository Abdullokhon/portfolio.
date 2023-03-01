window.addEventListener('DOMContentLoaded', () =>{
    window.addEventListener('scroll', ()=>{
        const navbar = document.querySelector('#navbar'),
            span = document.querySelector('#Logo_')
        navbar.classList.toggle('sticky', scrollY > 0)
        span.classList.toggle('sticky', scrollY > 0)
    })
    let typed2 = new Typed('#animation', {
        strings: ['Web developer',
                  'Front-end ',
                  'React Vue JS developer',
                  'YouTuber',
                  'Designer',
                  'Freelancer'],
        typeSpeed: 90,
        backSpeed: 120,
        fadeOut: true,
        loop: true
    });
})
