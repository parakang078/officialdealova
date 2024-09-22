// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Mengambil semua gambar dalam galeri
    const galleryImages = document.querySelectorAll('.gallery img');

    // Menambahkan event listener untuk setiap gambar
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // Membuat elemen modal untuk memperbesar gambar
            const modal = document.createElement('div');
            modal.classList.add('modal');

            // Menambahkan gambar yang diperbesar ke dalam modal
            const modalImage = document.createElement('img');
            modalImage.src = this.src; // Mengambil src gambar yang diklik
            modalImage.alt = this.alt;

            modal.appendChild(modalImage);
            document.body.appendChild(modal);

            // Menambahkan event listener untuk menutup modal saat diklik
            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });
});

const links = document.querySelectorAll('.nav-link');
const contentArea = document.getElementById('content-area');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default tautan

        // Ambil konten dari data-content
        const content = this.getAttribute('data-content');
        
        // Ganti konten di area konten
        contentArea.innerHTML = `<h2>${this.innerText}</h2><p>${content}</p>`;
    });
});

document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah perilaku default tautan

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <h2>Selamat Datang di Program Bergabung</h2>
        <p>Isi formulir di bawah untuk bergabung dengan kami!</p>
        <form>
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <br>
            <button type="submit">Kirim</button>
        </form>
    `;
    contentArea.style.display = 'block'; // Menampilkan konten
});
