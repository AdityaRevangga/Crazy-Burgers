const menuImages = document.querySelectorAll('.menu-item img');
    
        menuImages.forEach(img => {
            img.addEventListener('mouseover', () => {
                img.style.filter = 'brightness(1.2)'; // Mencerahkan gambar saat di-hover
            });
    
            img.addEventListener('mouseout', () => {
                img.style.filter = 'brightness(1)'; // Kembali ke normal saat mouse keluar
            });
        });