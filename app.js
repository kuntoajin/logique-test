document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('menu-open');
            
            navToggle.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Hanya tutup jika berada di tampilan mobile (<= 768px)
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('menu-open');
                    navToggle.classList.remove('active');
                }
            });
        });
    }

    const avatars = document.querySelectorAll('.avatar-list .avatar');
    const testimonialItems = document.querySelectorAll('.testimonial-slider .testimonial-item');

    function showTestimonial(index) {
        avatars.forEach(avatar => avatar.classList.remove('active'));
        testimonialItems.forEach(item => item.classList.remove('active'));

        avatars[index].classList.add('active');
        testimonialItems[index].classList.add('active');
    }

    avatars.forEach((avatar, index) => {
        avatar.addEventListener('click', () => {
            showTestimonial(index);
        });
    });
    
    showTestimonial(0);
});