const ROBOT_DATALARI = {
    "YKS": {
        "TYT TÜRKÇE - ANLAM BİLGİSİ": {
            "TEMEL DÜZEY": ["Birey A Serisi", "Önder Hoca KR Akademi", "Hız ve Renk"],
            "ORTA DÜZEY": ["345 Sıfır Risk", "Bilgi Sarmal", "Endemik Paragraf"],
            "İLERİ DÜZEY": ["Apotemi Paragraf", "Kronometre Limit", "Prf IQ Paragraf"]
        },
        "TYT MATEMATİK": {
            "TEMEL DÜZEY": ["Aktif Yay. O'dan Başlayanlara", "Matematiğin İlacı", "Birey A"],
            "ORTA DÜZEY": ["345 Yayınları", "Bilgi Sarmal", "Mert Hoca TYT"],
            "İLERİ DÜZEY": ["Acil Matematik", "3D Yayınları", "Orijinal"]
        }
        // ... (Diğer YKS derslerini buraya ekleyebilirsin)
    },
    "LGS": {
        "MATEMATİK": {
            "TEMEL DÜZEY": ["Matematix", "Fenomen Matematik Fasikülleri", "Antrenmanlarla Matematik"],
            "ORTA DÜZEY": ["Hız Yayınları", "Okyanus Check Et", "Tonguç", "Çanta Yayınları"],
            "İLERİ DÜZEY": ["Newton All Star", "Okyanus Master", "Fenomen B", "Sinan Kuzucu"]
        },
        "TÜRKÇE": {
            "TEMEL DÜZEY": ["Zeka Küpü", "Limit Yayınları", "Koray Varol"],
            "ORTA DÜZEY": ["Nartest Mavi", "Paragrafın Ritmi Arı", "Paraf IQ"],
            "İLERİ DÜZEY": ["Sinan Kuzucu", "Okyanus Master Paragraf", "Fenomen"]
        }
    }
};

const sinavSecim = document.getElementById('sinav-secim');
const dersSecim = document.getElementById('ders-secim');
const dersEtiketi = document.getElementById('ders-etiketi');
const seviyeSecim = document.getElementById('seviye-secim');
const seviyeEtiketi = document.getElementById('seviye-etiketi');
const kaynakListesi = document.getElementById('kaynak-listesi');

sinavSecim.addEventListener('change', (e) => {
    const sinav = e.target.value;
    dersSecim.innerHTML = '<option value="">-- Ders Seçiniz --</option>';
    seviyeSecim.style.display = 'none'; seviyeEtiketi.style.display = 'none';
    kaynakListesi.innerHTML = '';

    if (sinav) {
        Object.keys(ROBOT_DATALARI[sinav]).forEach(ders => {
            const opt = document.createElement('option');
            opt.value = ders; opt.textContent = ders;
            dersSecim.appendChild(opt);
        });
        dersSecim.style.display = 'block'; dersEtiketi.style.display = 'block';
    }
});

dersSecim.addEventListener('change', (e) => {
    const sinav = sinavSecim.value;
    const ders = e.target.value;
    seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
    kaynakListesi.innerHTML = '';

    if (ders) {
        Object.keys(ROBOT_DATALARI[sinav][ders]).forEach(seviye => {
            const opt = document.createElement('option');
            opt.value = seviye; opt.textContent = seviye;
            seviyeSecim.appendChild(opt);
        });
        seviyeSecim.style.display = 'block'; seviyeEtiketi.style.display = 'block';
    }
});

seviyeSecim.addEventListener('change', (e) => {
    const sinav = sinavSecim.value;
    const ders = dersSecim.value;
    const seviye = e.target.value;
    kaynakListesi.innerHTML = '';

    if (seviye) {
        const kaynaklar = ROBOT_DATALARI[sinav][ders][seviye];
        let className = ''; let emoji = '';

        if (seviye === "TEMEL DÜZEY") { className = "kolay-kaynak"; emoji = "🟢"; }
        else if (seviye === "ORTA DÜZEY") { className = "orta-kaynak"; emoji = "🔵"; }
        else if (seviye === "İLERİ DÜZEY") { className = "zor-kaynak"; emoji = "🔴"; }

        kaynaklar.forEach(kaynak => {
            const li = document.createElement('li');
            li.innerHTML = `<span class="list-emoji">${emoji}</span> ${kaynak}`;
            li.className = className;
            kaynakListesi.appendChild(li);
        });
    }
});
