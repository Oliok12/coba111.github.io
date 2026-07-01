const menuData = [
    // ===== BAKMI (Opsi C) =====
    { category: 'bakmi', name: 'Bakmi Ayam', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam', price: '17K' },
    { category: 'bakmi', name: 'Bakmi Ayam Charsiu', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam charsiu', price: '18K' },
    { category: 'bakmi', name: 'Bakmi Ayam Chilli Oil', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + chilli oil', price: '18K' },
    { category: 'bakmi', name: 'Bakmi Ayam Pangsit', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + pangsit', price: '20K' },
    { category: 'bakmi', name: 'Bakmi Ayam Pangsit Charsiu', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + pangsit + charsiu', price: '21K' },
    { category: 'bakmi', name: 'Bakmi Ayam Pangsit Chilli Oil', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + pangsit + chilli oil', price: '21K' },
    { category: 'bakmi', name: 'Bakmi Ayam Bakso', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + bakso', price: '20K' },
    { category: 'bakmi', name: 'Bakmi Ayam Bakso Charsiu', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + bakso + charsiu', price: '21K' },
    { category: 'bakmi', name: 'Bakmi Ayam Bakso Chilli Oil', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + bakso + chilli oil', price: '21K' },
    { category: 'bakmi', name: 'Bakmi Komplit', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + pangsit + bakso', price: '23K' },
    { category: 'bakmi', name: 'Bakmi Komplit Charsiu', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + pangsit + bakso + charsiu', price: '24K' },
    { category: 'bakmi', name: 'Bakmi Komplit Chilli Oil', desc: 'Pilih mie: Gepeng/Kecil/Kwetiau + ayam + pangsit + bakso + chilli oil', price: '24K' },

    // ===== ANEKA MIE =====
    { category: 'mie', name: 'Bakmie Biasa', desc: 'Bakmie goreng/rebus + telur + tauge + sawi + kucai', price: '15K' },
    { category: 'mie', name: 'Kwetiau Biasa', desc: 'Kwetiau goreng/rebus + telur + tauge + sawi + kucai', price: '15K' },
    { category: 'mie', name: 'Bihun Biasa', desc: 'Bihun goreng/rebus + telur + tauge + sawi + kucai', price: '15K' },
    { category: 'mie', name: 'Bakmie Spesial Waras', desc: 'Bakmie + telur + ayam charsiu + ampyang + bakso ikan + tauge + sawi + kucai', price: '26K' },
    { category: 'mie', name: 'Kwetiau Spesial Waras', desc: 'Kwetiau + telur + ayam charsiu + ampyang + bakso ikan + tauge + sawi + kucai', price: '26K' },
    { category: 'mie', name: 'Bihun Spesial Waras', desc: 'Bihun + telur + ayam charsiu + ampyang + bakso ikan + tauge + sawi + kucai', price: '26K' },

    // ===== MENU NASI =====
    { category: 'nasi', name: 'Nasi Telor', desc: 'Nasi putih + telur', price: '10K' },
    { category: 'nasi', name: 'Nasi Ayam Madu', desc: 'Nasi + ayam goreng tepung + bumbu madu', price: '17K' },
    { category: 'nasi', name: 'Nasi Ayam Cabai Garam', desc: 'Nasi + ayam goreng tepung + cabai garam', price: '17K' },
    { category: 'nasi', name: 'Nasi Ayam Chilli Padi', desc: 'Nasi + ayam goreng tepung + chilli padi', price: '17K' },
    { category: 'nasi', name: 'Nasi Ikan Cabai Garam', desc: 'Nasi + ikan goreng tepung + cabai garam', price: '13K' },
    { category: 'nasi', name: 'Nasi Ikan Chilli Padi', desc: 'Nasi + ikan goreng tepung + chilli padi', price: '13K' },

    // ===== NASI GORENG =====
    { category: 'nasgor', name: 'Nasi Goreng Ayam', desc: 'Nasi goreng + ayam', price: '15K' },
    { category: 'nasgor', name: 'Nasi Goreng Waras', desc: 'Nasi goreng + ayam + bakso ikan + telur', price: '26K' },
    { category: 'nasgor', name: 'Nasi Goreng Gila', desc: 'Nasi goreng + tumisan ayam + ayam charsiu + bakso ikan + telur', price: '28K' },
    { category: 'nasgor', name: 'Nasi Goreng Teri Medan', desc: 'Nasi goreng + ayam + teri medan + telur', price: '18K' },
    { category: 'nasgor', name: 'Nasi Goreng Cumi Asin', desc: 'Nasi goreng + cumi asin + telur', price: '18K' },

    // ===== PAKET LAUK =====
    { category: 'lauk', name: 'I Fu Mie', desc: 'I Fu Mie khas', price: '26K' },
    { category: 'lauk', name: 'Fuyunghai', desc: 'Telur dadar khas dengan sayuran', price: '35K' },
    { category: 'lauk', name: 'Sapo Tahu', desc: 'Tahu dengan saus spesial', price: '35K' },
    { category: 'lauk', name: 'Ayam Madu', desc: 'Ayam goreng dengan saus madu', price: '35K' },
    { category: 'lauk', name: 'Ayam Cabai Garam', desc: 'Ayam goreng cabai garam', price: '35K' },
    { category: 'lauk', name: 'Ayam Cilipadi', desc: 'Ayam goreng chilli padi', price: '35K' },
    { category: 'lauk', name: 'Ikan Cabai Garam', desc: 'Ikan goreng cabai garam', price: '22K' },
    { category: 'lauk', name: 'Ikan Chilli Padi', desc: 'Ikan goreng chilli padi', price: '22K' },

    // ===== CAMILAN =====
    { category: 'camilan', name: 'Pangsit Goreng', desc: '5 pcs', price: '10K' },
    { category: 'camilan', name: 'Bakso Goreng', desc: '8 pcs', price: '10K' },
    { category: 'camilan', name: 'Kentang Goreng', desc: 'Porsi sedang', price: '10K' },
    { category: 'camilan', name: 'Tahu Bakso Goreng', desc: '5 pcs', price: '10K' },
    { category: 'camilan', name: 'Tahu Isi', desc: '4 pcs', price: '10K' },
    { category: 'camilan', name: 'Bakwan Sayur', desc: '4 pcs', price: '10K' },
    { category: 'camilan', name: 'Bakwan Jagung', desc: '5 pcs', price: '10K' },
    { category: 'camilan', name: 'Pisang Goreng', desc: '4 pcs', price: '10K' },

    // ===== ROTI & PISANG =====
    { category: 'roti', name: 'Roti Butter', desc: 'Roti bakar + butter', price: '14K' },
    { category: 'roti', name: 'Roti Coklat', desc: 'Roti bakar + coklat', price: '14K' },
    { category: 'roti', name: 'Roti Kacang Coklat', desc: 'Roti bakar + kacang + coklat', price: '16K' },
    { category: 'roti', name: 'Pisang Kacang Coklat', desc: 'Pisang bakar + kacang + coklat', price: '18K' },
    { category: 'roti', name: 'Roti Keju Susu', desc: 'Roti bakar + keju + susu', price: '16K' },
    { category: 'roti', name: 'Pisang Keju Susu', desc: 'Pisang bakar + keju + susu', price: '18K' },
    { category: 'roti', name: 'Roti Butter Kaya', desc: 'Roti bakar + butter kaya', price: '16K' },
    { category: 'roti', name: 'Pisang Butter Kaya', desc: 'Pisang bakar + butter kaya', price: '18K' },

    // ===== MINUMAN =====
    { category: 'minuman', name: 'Kopi Saring (Panas)', desc: 'Kopi saring tradisional', price: '10K' },
    { category: 'minuman', name: 'Kopi Saring (Dingin)', desc: 'Kopi saring es', price: '12K' },
    { category: 'minuman', name: 'Kopi Teras (Panas)', desc: 'Kopi spesial Waras', price: '15K' },
    { category: 'minuman', name: 'Kopi Liong (Panas)', desc: 'Kopi liong khas', price: '6K' },
    { category: 'minuman', name: 'Kopi Susu (Panas)', desc: 'Kopi + susu', price: '10K' },
    { category: 'minuman', name: 'Teh Tawar (Panas)', desc: 'Teh tanpa gula', price: '3K' },
    { category: 'minuman', name: 'Teh Tawar (Dingin)', desc: 'Es teh tanpa gula', price: '4K' },
    { category: 'minuman', name: 'Teh Manis (Panas)', desc: 'Teh dengan gula', price: '4K' },
    { category: 'minuman', name: 'Teh Manis (Dingin)', desc: 'Es teh manis', price: '5K' },
    { category: 'minuman', name: 'Teh Tarik (Panas)', desc: 'Teh tarik khas', price: '12K' },
    { category: 'minuman', name: 'Teh Tarik (Dingin)', desc: 'Es teh tarik', price: '14K' },
    { category: 'minuman', name: 'Lemon Tea (Panas)', desc: 'Teh lemon hangat', price: '8K' },
    { category: 'minuman', name: 'Lemon Tea (Dingin)', desc: 'Es lemon tea', price: '8K' },
    { category: 'minuman', name: 'Es Lemon', desc: 'Minuman lemon segar', price: '8K' },
    { category: 'minuman', name: 'Air Mineral', desc: 'Air mineral dingin', price: '5K' },
    { category: 'minuman', name: 'Es Badak', desc: 'Minuman khas segar', price: '15K' },
    { category: 'minuman', name: 'Coffee Bear', desc: 'Minuman kopi spesial', price: '14K' },

    // ===== TAMBAHAN =====
    { category: 'tambahan', name: 'Porsi Jumbo', desc: 'Tambah porsi lebih besar', price: '5K' },
    { category: 'tambahan', name: 'Ayam Cincang', desc: 'Tambahan ayam cincang', price: '5K' },
    { category: 'tambahan', name: 'Ayam Char Siu', desc: 'Tambahan ayam char siu', price: '6K' },
    { category: 'tambahan', name: 'Bakso Sapi', desc: 'Tambahan bakso sapi', price: '4K' },
    { category: 'tambahan', name: 'Bakso Ikan', desc: 'Tambahan bakso ikan', price: '4K' },
    { category: 'tambahan', name: 'Pangsit', desc: 'Tambahan pangsit', price: '5K' },
    { category: 'tambahan', name: 'Telur', desc: 'Tambahan telur', price: '5K' },
    { category: 'tambahan', name: 'Ampyang', desc: 'Tambahan ampyang', price: '5K' },
    { category: 'tambahan', name: 'Nasi Putih', desc: 'Tambahan nasi putih', price: '5K' },
];

// Fungsi renderMenu dengan banner untuk kategori Bakmi
function renderMenu(category = 'all') {
    const container = document.getElementById('menuContainer');
    let filtered = menuData;

    if (category !== 'all') {
        filtered = menuData.filter(item => item.category === category);
    }

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center;color:#999;padding:40px;">Belum ada menu di kategori ini.</p>`;
        return;
    }

    let html = '';

    // Tampilkan banner hanya jika kategori Bakmi dipilih
    if (category === 'bakmi') {
        html += `
            <div class="mie-banner">
                <p>
                    🍜 <strong>Pilihan Mie:</strong> Gepeng &bull; Kecil &bull; Kwetiau 
                    <span class="note">(harga sama untuk semua jenis mie)</span>
                </p>
            </div>
        `;
    }

    html += '<div class="menu-grid">';
    filtered.forEach(item => {
        const imgName = getImageName(item.name);
        html += `
            <div class="menu-item">
                <img src="images/${imgName}" alt="${item.name}" 
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-family=%22sans-serif%22 font-size=%2220%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3E🍽️%3C/text%3E%3C/svg%3E'">
                <div class="info">
                    <span class="category-badge">${getCategoryLabel(item.category)}</span>
                    <h3>${item.name}</h3>
                    <div class="desc">${item.desc}</div>
                    <div class="price">Rp ${item.price}</div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

function getCategoryLabel(cat) {
    const labels = {
        bakmi: 'Bakmi',
        mie: 'Aneka Mie',
        nasi: 'Menu Nasi',
        nasgor: 'Nasi Goreng',
        lauk: 'Paket Lauk',
        camilan: 'Camilan',
        roti: 'Roti & Pisang',
        minuman: 'Minuman',
        tambahan: 'Tambahan'
    };
    return labels[cat] || cat;
}

function getImageName(name) {
    const map = {
        'Bakmi Ayam': 'bakmi-ayam.jpg',
        'Nasi Goreng Waras': 'nasi-goreng.jpg',
        'Nasi Ayam Madu': 'nasi-ayam.jpg',
        'Fuyunghai': 'fuyunghai.jpg',
        'Pisang Goreng': 'pisang-goreng.jpg',
        'Kopi Saring (Panas)': 'kopi.jpg',
    };
    return map[name] || 'default.jpg';
}

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const category = this.dataset.category;
            renderMenu(category);
        });
    });
    renderMenu('all');
});

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('open');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mainNav').classList.remove('open');
    });
});
