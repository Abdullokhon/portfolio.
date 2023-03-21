window.addEventListener('DOMContentLoaded',function (){
    window.addEventListener('scroll',function (){
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0)
    })
    const menuBtn = document.querySelector('.menu-btn'),
        nav = document.querySelector('.navigation')
    menuBtn.addEventListener('click',() => {
        menuBtn.classList.toggle('active')
        nav.classList.toggle('active')
    })

    const scrollbtn = document.querySelector('.scrolltotop')
    window.addEventListener('scroll', () => {
        scrollbtn.classList.toggle('active', window.scrollY > 500)
    })
    scrollbtn.addEventListener('click',
        () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    window.addEventListener('scroll',() =>{
        let reveals = document.querySelectorAll('.reveal')
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active')
            }
        }
    })

    let typed1 = new Typed('#typed1', {
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
    let typed2 = new Typed('#typed2', {
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
//     let typed = new Typed('#About-title', {
//         strings: ['Web developer',
//                   'Front-end ',
//                   'React Vue JS developer',
//                   'YouTuber',
//                   'Designer',
//                   'Freelancer'],
//         typeSpeed: 90,
//         backSpeed: 120,
//         fadeOut: true,
//         loop: true
//     });
//
// })
