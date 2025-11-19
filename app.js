document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil elemen tombol toggle dan navigasi
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Pastikan kedua elemen ditemukan sebelum mencoba menambahkan event listener
    if (navToggle && mainNav) {
        
        navToggle.addEventListener('click', () => {
            // 2. Toggle class 'menu-open' pada <nav> untuk menampilkan/menyembunyikan menu
            mainNav.classList.toggle('menu-open');
            
            // 3. Toggle class 'active' pada tombol untuk animasi ikon X
            navToggle.classList.toggle('active');
        });

        // 4. Opsional: Tutup menu saat link di dalam menu diklik
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
    
    // Tampilkan testimoni pertama saat halaman dimuat
    showTestimonial(0);
});