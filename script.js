// --- TÜM BİRLEŞTİRİLMİŞ KAYNAK VERİSİ ---
const ROBOT_DATALARI = {
    "YKS": {
        "TYT TÜRKÇE - ANLAM BİLGİSİ": {
            "TEMEL DÜZEY": ["Birey A Serisi", "Önder Hoca KR Akademi (Video Destekli)", "Hız ve Renk", "Hız Yayınları"],
            "ORTA DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Endemik Paragraf", "Bilgi Sarmal", "Paraf Soru Kütüphanesi", "345 Sıfır Risk", "Süreli Türkçe Soru Bankası", "Çap plus", "3-4-5 Yay.", "Altın karma yayınları tyt paragraf konu konu çıkmış sorular"],
            "İLERİ DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Prf IQ Paragraf", "Kronometre Limit", "Paragrafın Şifresi (Yargı)", "Paradoks (Tonguç, Gri)", "Apotemi Paragraf"]
        },
        "TYT TÜRKÇE - DİL BİLGİSİ": {
            "TEMEL DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Dil Bilgisi İleri Seviye Soru Bank.", "Sıfırdan Sonsuza Doktirin Yayınları", "birey a"],
            "ORTA DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Bilgi Sarmal", "345", "Yayın Denizi Pro", "palme", "benim hocam", "hız ve renk"],
            "İLERİ DÜZEY": ["Önder Hoca KR Akademi (Video Destekli)", "Yayın Denizi Pro 2", "3d dil bilgisi"]
        },
        "TYT MATEMATİK": {
            "TEMEL DÜZEY": ["Aktif Yay. O'dan Başlayanlara", "Matematiğin İlacı (Acil Yay)", "Birey A serisi", "Kafadengi Turuncu", "Karekök Sıfır", "AKTİF GÜÇLENDİREN SERİ", "MİKRO ORJİNAL", "rehber matematik"],
            "ORTA DÜZEY": ["345 Yayınları", "Bilgi Sarmal", "Kaf 1 (Video Dersli)", "Kaf 2 (Video Dersli)", "Eğitim Vadisi yay.", "Karekök Yayınları", "Mert Hoca TYT Video Ders", "Miray Yay. Soru B. (Bıyıklı Matematik)", "esen yayınları"],
            "İLERİ DÜZEY": ["Acil yayınları", "3D yayınları", "Apotemi TYT Soru Bankası", "Toprak (Yeni Nesil +)", "Orijinal Yayınları", "Paraf Yeni Nesil Soru Kütüphanesi", "Prf Gold serisi", "Metin Yayınları", "Aydın Yay. Matematik S. Ban.", "Endemik yayınları", "Eyüp B TYT Video Defter"]
        },
        "TYT PROBLEMLER": {
            "TEMEL DÜZEY": ["Ant. Yay. Hiç Problem Değil", "Tonguç Problematik", "Rehber Mat. 321 Soruda Bitir İşi", "Aktif Matematik", "Problemlerin İlacı"],
            "ORTA DÜZEY": ["Acil Problemler", "Bilgi Sarmal ( Sınav ayarı)", "345 yayınları", "Arı Yay. Problemlerin Ritmi", "ORJİNAL MİKRO SERİSİ"],
            "İLERİ DÜZEY": ["Toprak yayınları", "Apotemi Problemler", "Problemlerin Ritmi", "Endemik yayınları", "Hız ve Renk", "Supara Problemler"]
        },
        "TYT GEOMETRİ": {
            "TEMEL DÜZEY": ["Geometrinin İlacı (Acil Yay)", "Kafadengi Turuncu", "Aktif Ö. Yayınları", "Full yayınları", "Eis (Föy)", "Çap(Föy)", "Ens yayınları"],
            "ORTA DÜZEY": ["3 4 5 Yayınları", "Bilgi Sarmal", "Eğitim vadisi", "Metin yayınları", "Yayın Denizi Pro", "Kaf Geo 1-2", "AYDIN YAYINLARI", "Kenan Kara ile Geometri"],
            "İLERİ DÜZEY": ["Acil yayınları", "3D yayınları", "Orijinal yayınları", "Karekök yayınları", "Apotemi Maestro", "Toprak", "Apotemi Analitik Fasikül"]
        },
        "TYT FİZİK": {
            "TEMEL DÜZEY": ["Ens yayınları", "okyanus 40 seansta", "Prf yay. Adım adım", "Aktif fizik", "miray tyt fizik"],
            "ORTA DÜZEY": ["Eğitim vadisi yay.", "3 4 5 Yayınları", "Hız ve renk", "Bilgi Sarmal", "Kafa dengi yayınları", "Ertan Sinan Setler", "Altuğ Güneş Setler", "Vip Fizik"],
            "İLERİ DÜZEY": ["Nihat Bilgin'in kitabı", "3D yayınları", "Karaağaç Yayınları", "Yayın Denizi", "MF Kazanım"]
        },
        "TYT KİMYA": {
            "TEMEL DÜZEY": ["Aktif Ö. Yayınları", "ENS yayınları", "Hız ve renk", "Prf yay. Adım adım", "Miray"],
            "ORTA DÜZEY": ["Orbital yayınları", "3 4 5 Yayınları", "Palme yayınları", "Yayın denizi", "9.SINIF BİLGİ SARMAL", "miray"],
            "İLERİ DÜZEY": ["Palme yayınları", "3 4 5 yayınları", "3D yayınları", "Aydın yayınları", "Apotemi TYT Soru Bankası"]
        },
        "TYT BİYOLOJİ": {
            "TEMEL DÜZEY": ["Biyotik yayınları", "Prf yay. Adım Adım", "Ens yayınları", "Okyanus 40 seansta", "Betül Biyoloji"],
            "ORTA DÜZEY": ["Biyotik yayınları", "3 4 5 Yayınları", "Palme yayınları", "Bilgi sarmal", "DR. Biyoloji", "Fundamentals"],
            "İLERİ DÜZEY": ["3D Yayınları", "Aydın yayınları", "Prf Yayın", "Limit yayınları"]
        },
        "TYT TARİH": {
            "TEMEL DÜZEY": ["Çözüm yayınları", "Eis yayınları 9. sınıf"],
            "ORTA DÜZEY": ["Ramazan yetkin AYT", "3 4 5 Yayınları", "Yayın denizi", "Palme Soru Bankası", "benim hocam"],
            "İLERİ DÜZEY": ["Bilgi Sarmal", "Limit yayınları", "Karekök yayınları"]
        },
        "TYT COĞRAFYA": {
            "TEMEL DÜZEY": ["Yayın denizi", "Eis coğrafya 9. sınıf", "E Coğrafya"],
            "ORTA DÜZEY": ["Benim Hocam Amiral", "3 4 5 Yayınları", "Palme yayıncılık", "Yavuz Tuna TYT SB", "Limit El Kitabı"],
            "İLERİ DÜZEY": ["Limit yayıncılık TYT AYT", "Bilgi Sarmal", "Karekök yayınları", "3d"]
        },
        "TYT FELSEFE": {
            "TEMEL DÜZEY": ["Dahi Adam Yayınları", "Yayın Denizi", "Bilim Yolu yayınları"],
            "ORTA DÜZEY": ["Limit Yayınları", "3 4 5 Yayınları", "3D Yayıncılık", "Benim Hocam (Can Köni)"],
            "İLERİ DÜZEY": []
        },
        "AYT MATEMATİK": {
            "TEMEL DÜZEY": ["Aktif Ö. yay.", "Birey A serisi", "Merhaba AYT (Şenol Hoca)", "ACİL İLACI", "ENS 12. SINIF FASİKÜL"],
            "ORTA DÜZEY": ["Bilgi Sarmal", "3 4 5 Yayınları", "Endemik yayınları", "Metin yayınları", "Mert Hoca AYT Video Ders"],
            "İLERİ DÜZEY": ["3D yayınları", "Acil yayınları", "Orijinal yayınları", "Kaf 3-4", "Apotemi Fasikülleri"]
        },
        "AYT EDEBİYAT": {
            "TEMEL DÜZEY": ["
