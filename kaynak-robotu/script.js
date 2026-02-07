document.addEventListener('DOMContentLoaded', function() {
    // 1. TÜM VERİ SETİ (Eksiksiz: YKS + LGS)
    const ROBOT_DATALARI = {
        "YKS": {
            "TYT TÜRKÇE - ANLAM BİLGİSİ": {
                "TEMEL DÜZEY": ["Birey A Serisi", "Önder Hoca KR Akademi (Video Destekli)", "Hız ve Renk", "Hız Yayınları"],
                "ORTA DÜZEY": ["Önder Hoca KR Akademi", "Endemik Paragraf", "Bilgi Sarmal", "Paraf Soru Kütüphanesi", "345 Sıfır Risk", "Süreli Türkçe Soru Bankası", "Çap plus", "3-4-5 Yay.", "Altın karma tyt paragraf"],
                "İLERİ DÜZEY": ["Önder Hoca KR Akademi", "Prf IQ Paragraf", "Kronometre Limit", "Paragrafın Şifresi (Yargı)", "Paradoks (Tonguç, Gri)", "Apotemi Paragraf"]
            },
            "TYT TÜRKÇE - DİL BİLGİSİ": {
                "TEMEL DÜZEY": ["Önder Hoca KR Akademi", "Dil Bilgisi İleri Seviye Soru Bank.", "Sıfırdan Sonsuza Doktirin Yayınları", "birey a"],
                "ORTA DÜZEY": ["Önder Hoca KR Akademi", "Bilgi Sarmal", "345", "Yayın Denizi Pro", "palme", "benim hocam", "hız ve renk"],
                "İLERİ DÜZEY": ["Yayın Denizi Pro 2", "3d dil bilgisi"]
            },
            "TYT MATEMATİK": {
                "TEMEL DÜZEY": ["Aktif Yay. O'dan Başlayanlara", "Matematiğin İlacı (Acil Yay)", "Birey A serisi", "Kafadengi Turuncu", "Karekök Sıfır", "MİKRO ORJİNAL", "rehber matematik"],
                "ORTA DÜZEY": ["345 Yayınları", "Bilgi Sarmal", "Kaf 1-2 (Video Dersli)", "Eğitim Vadisi yay.", "Karekök Yayınları", "Mert Hoca TYT Video Ders", "Miray Yay. (Bıyıklı Matematik)", "esen yayınları"],
                "İLERİ DÜZEY": ["Acil yayınları", "3D yayınları", "Apotemi TYT Soru Bankası", "Toprak (Yeni Nesil +)", "Orijinal Yayınları", "Paraf Yeni Nesil Soru Kütüphanesi", "Prf Gold serisi", "Metin Yayınları", "Eyüp B TYT Video Defter"]
            },
            "TYT PROBLEMLER": {
                "TEMEL DÜZEY": ["Ant. Yay. Hiç Problem Değil", "Tonguç Problematik", "Rehber Mat. 321 Soruda Bitir İşi", "Aktif Matematik", "Problemlerin İlacı"],
                "ORTA DÜZEY": ["Acil Problemler", "Bilgi Sarmal ( Sınav ayarı)", "345 yayınları", "Arı Yay. Problemlerin Ritmi", "ORJİNAL MİKRO SERİSİ"],
                "İLERİ DÜZEY": ["Toprak yayınları", "Apotemi Problemler", "Endemik yayınları", "Hız ve Renk", "Supara Problemler"]
            },
            "TYT GEOMETRİ": {
                "TEMEL DÜZEY": ["Geometrinin İlacı (Acil Yay)", "Kafadengi Turuncu", "Aktif Ö. Yayınları", "Full yayınları", "Ens yayınları"],
                "ORTA DÜZEY": ["3 4 5 Yayınları", "Bilgi Sarmal", "Metin yayınları", "Kaf Geo 1-2", "AYDIN YAYINLARI", "Kenan Kara ile Geometri"],
                "İLERİ DÜZEY": ["Acil yayınları", "3D yayınları", "Orijinal yayınları", "Karekök yayınları", "Apotemi Maestro", "Apotemi Analitik Geometri"]
            },
            "TYT FİZİK": {
                "TEMEL DÜZEY": ["Ens yayınları", "okyanus 40 seansta", "Aktif fizik", "miray tyt fizik"],
                "ORTA DÜZEY": ["3 4 5 Yayınları", "Bilgi Sarmal", "Ertan Sinan Şahin", "Altuğ Güneş", "Vip Fizik", "TOPRAK YAYINLARI"],
                "İLERİ DÜZEY": ["Nihat Bilgin", "3D yayınları", "Karaağaç Yayınları", "Yayın Denizi", "çap fasikül"]
            },
            "TYT KİMYA": {
                "TEMEL DÜZEY": ["Aktif Ö. Yayınları", "ENS yayınları", "Hız ve renk", "Miray"],
                "ORTA DÜZEY": ["Orbital yayınları", "3 4 5 Yayınları", "Palme yayınları", "9.SINIF BİLGİ SARMAL"],
                "İLERİ DÜZEY": ["Aydın yayınları", "3D yayınları", "Apotemi TYT Soru Bankası"]
            },
            "TYT BİYOLOJİ": {
                "TEMEL DÜZEY": ["Biyotik yayınları", "Ens yayınları", "Okyanus 40 seansta", "Betül Biyoloji TYT"],
                "ORTA DÜZEY": ["3 4 5 Yayınları", "Palme yayınları", "Bilgi sarmal", "DR. Biyoloji", "Fundamentals", "Barış Hoca TYT"],
                "İLERİ DÜZEY": ["3D Yayınları", "Aydın yayınları", "Limit yayınları"]
            },
            "AYT MATEMATİK": {
                "TEMEL DÜZEY": ["Aktif AYT", "Merhaba AYT (Şenol Hoca)", "ACİL İLACI", "ENS Fasikül"],
                "ORTA DÜZEY": ["Bilgi Sarmal", "3 4 5 Yayınları", "Endemik yayınları", "Mert Hoca AYT Video Ders"],
                "İLERİ DÜZEY": ["3D yayınları", "Acil yayınları", "Orijinal yayınları", "Kaf 3-4", "Apotemi Fasikülleri"]
            },
            "AYT GEOMETRİ": {
                "TEMEL DÜZEY": ["Geometrinin İlacı (Acil)", "Kafadengi Turuncu", "Ens yayınları"],
                "ORTA DÜZEY": ["3 4 5 Yayınları", "Bilgi Sarmal", "Metin yayınları", "Kenan Kara ile Geometri"],
                "İLERİ DÜZEY": ["Acil yayınları", "3D yayınları", "Orijinal yayınları", "Apotemi Maestro"]
            },
            "AYT FİZİK": {
                "TEMEL DÜZEY": ["Aktif AYT", "Prf yayınları", "Okyanus 40 seans"],
                "ORTA DÜZEY": ["Bilgi Sarmal", "3 4 5 Yayınları", "Aydın yayınları", "Vip Fizik AYT", "Altuğ Güneş"],
                "İLERİ DÜZEY": ["3D Yayınları", "Nihat Bilgin", "Karaağaç yayınları"]
            },
            "AYT KİMYA": {
                "TEMEL DÜZEY": ["Aktif AYT", "Okyanus 40 seansta"],
                "ORTA DÜZEY": ["Palme yayıncılık", "Çap yayınları", "Orbital yayınları", "Bilgi Sarmal"],
                "İLERİ DÜZEY": ["3D yayınları", "Aydın yayınları", "Aydın Organik kimya"]
            },
            "AYT BİYOLOJİ": {
                "TEMEL DÜZEY": ["Biyotik yayınları"],
                "ORTA DÜZEY": ["Biyotik yayınları", "3 4 5 Yayınları", "Palme yayıncılık", "Bilgi Sarmal", "Barış Hoca AYT"],
                "İLERİ DÜZEY": ["Aydın", "3D yayınları", "Apotemi sistemler"]
            },
            "AYT EDEBİYAT": {
                "TEMEL DÜZEY": ["Okyanus yay.", "3 4 5 yayınları", "Kafa dengi yayınları"],
                "ORTA DÜZEY": ["Yayın Denizi", "Palme", "Editör Konsensus", "Karekök yayınları"],
                "İLERİ DÜZEY": ["Limit yayınları", "Bilgi sarmal", "3D yayınları"]
            },
            "AYT TARİH": {
                "TEMEL DÜZEY": ["Çözüm yayınları", "Eis yayınları"],
                "ORTA DÜZEY": ["Ramazan yetkin AYT", "3 4 5 Yayınları", "Yayın denizi", "Palme"],
                "İLERİ DÜZEY": ["Bilgi Sarmal", "Limit yayınları", "Karekök Sosyal"]
            },
            "AYT COĞRAFYA": {
                "TEMEL DÜZEY": ["Okyanus yay."],
                "ORTA DÜZEY": ["Palme", "3 4 5 Yayınları", "Bilgi sarmal", "Yavuz Tuna AYT"],
                "İLERİ DÜZEY": ["Limit yayınları", "Karekök", "3d coğrafya"]
            }
        },
        "LGS": {
            "TÜRKÇE": {
                "TEMEL DÜZEY": ["Zeka Küpü", "Limit Yayınları", "Simya", "Koray Varol", "İşleyen Zeka"],
                "ORTA DÜZEY": ["Ben Korkmam", "Tonguç", "Bilfen", "Nartest Mavi", "Paragrafın Ritmi Arı", "Çanta Yayınları", "Güçlendiren Türkçe Ankara Y."],
                "İLERİ DÜZEY": ["Sinan Kuzucu*", "Okyanus Master Paragraf", "Hız*", "Fenomen", "Nartest Kırmızı"]
            },
            "MATEMATİK": {
                "TEMEL DÜZEY": ["Matematix", "Fenomen Matematik Fasikülleri*", "Arı Matematik", "Nartest İlk Adım", "Antrenmanlarla Matematik"],
                "ORTA DÜZEY": ["Ephesus","Okyanus Check Et", "Paraf IQ", "Strateji Bam Bam", "Hız Yayınları*", "Tonguç", "Çanta Yayınları", "Fenomen A"],
                "İLERİ DÜZEY": ["Tudem", "Newton All Star", "Bilfen-ProBil", "Okyanus Master", "Fenomen B", "Sinan Kuzucu"]
            },
            "FEN BİLİMLERİ": {
                "TEMEL DÜZEY": ["Süper A Akademi Nitelik Y.", "Bilfen Yayınları"],
                "ORTA DÜZEY": ["Paraf IQ", "Okyanus Check Et", "Mozaik", "Zoom", "Palme Plus", "Fenomen", "Güçlendiren Fen Bilimleri Ankara Y."],
                "İLERİ DÜZEY": ["Newton Allstar", "Okyanus Master-Update", "Çanta Yayınları", "Kafadengi Challenger"]
            },
            "T.C. İNKILAP TARİHİ": {
                "TEMEL DÜZEY": ["Tonguç Akademi", "Puan Yayınları", "Okyanus Classmate", "Nartest Yeşil"],
                "ORTA DÜZEY": ["Ulti", "Palme", "Limit Yayınları", "İnkılap Kafası Kafadengi", "Nartest Mavi", "Hız Yayınları", "Fenomen"],
                "İLERİ DÜZEY": ["Sinan Kuzucu"]
            },
            "DİN KÜLTÜRÜ": {
                "TEMEL DÜZEY": ["Okyanus CLASSMATE", "Tonguç Taktikli Soru Bankası"],
                "ORTA DÜZEY": ["Tonguç Dinamo", "Palme Konu Anlatımlı", "Tudem Din Kültürü HBA", "Nartest Mavi Seri", "Nitelik Süper Soru Kitabı", "Hız Yayınları"],
                "İLERİ DÜZEY": ["Bilfen Pro Test", "Palme Plus Serisi"]
            },
            "İNGİLİZCE": {
                "TEMEL DÜZEY": ["Tonguç Dinamo"],
                "ORTA DÜZEY": ["İngilizce Kafası", "Palme Plus", "More and More", "Ahead With English", "Hız Yayınları", "Fenomen"],
                "İLERİ DÜZEY": ["YDS Publishing", "Team Elt", "Masterclass", "Yanıt Yayınları"]
            }
        }
    };

    // 2. ELEMENTLERİ SEÇELİM
    const sinavSecim = document.getElementById('sinav-secim');
    const dersSecim = document.getElementById('ders-secim');
    const dersEtiketi = document.getElementById('ders-etiketi');
    const seviyeSecim = document.getElementById('seviye-secim');
    const seviyeEtiketi = document.getElementById('seviye-etiketi');
    const kaynakListesi = document.getElementById('kaynak-listesi');

    // 3. SINAV SEÇİLDİĞİNDE
    if (sinavSecim) {
        sinavSecim.addEventListener('change', function() {
            const sinav = this.value;
            dersSecim.innerHTML = '<option value="">-- Ders Seçiniz --</option>';
            seviyeSecim.style.display = 'none';
            if(seviyeEtiketi) seviyeEtiketi.style.display = 'none';
            kaynakListesi.innerHTML = '';

            if (sinav && ROBOT_DATALARI[sinav]) {
                Object.keys(ROBOT_DATALARI[sinav]).forEach(ders => {
                    const opt = document.createElement('option');
                    opt.value = ders;
                    opt.textContent = ders;
                    dersSecim.appendChild(opt);
                });
                dersSecim.style.display = 'block';
                if(dersEtiketi) dersEtiketi.style.display = 'block';
            }
        });
    }

    // 4. DERS SEÇİLDİĞİNDE
    if (dersSecim) {
        dersSecim.addEventListener('change', function() {
            const sinav = sinavSecim.value;
            const ders = this.value;
            seviyeSecim.innerHTML = '<option value="">-- Seviye Seçiniz --</option>';
            kaynakListesi.innerHTML = '';

            if (sinav && ders && ROBOT_DATALARI[sinav][ders]) {
                Object.keys(ROBOT_DATALARI[sinav][ders]).forEach(seviye => {
                    const opt = document.createElement('option');
                    opt.value = seviye;
                    opt.textContent = seviye;
                    seviyeSecim.appendChild(opt);
                });
                seviyeSecim.style.display = 'block';
                if(seviyeEtiketi) seviyeEtiketi.style.display = 'block';
            }
        });
    }

    // 5. SEVİYE SEÇİLDİĞİNDE
    if (seviyeSecim) {
        seviyeSecim.addEventListener('change', function() {
            const sinav = sinavSecim.value;
            const ders = dersSecim.value;
            const seviye = this.value;
            kaynakListesi.innerHTML = '';

            if (sinav && ders && seviye && ROBOT_DATALARI[sinav][ders][seviye]) {
                const kaynaklar = ROBOT_DATALARI[sinav][ders][seviye];
                let className = '';
                let emoji = '';

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
    }
});
