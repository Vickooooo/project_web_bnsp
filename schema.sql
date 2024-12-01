CREATE TABLE pemesanan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    gender ENUM('Laki-laki', 'Perempuan'),
    nomor_identitas VARCHAR(16),
    tipe_kamar VARCHAR(50),
    tanggal_pesan DATE,
    durasi_menginap INT,
    termasuk_breakfast TINYINT(1),
    total_bayar VARCHAR(50)
);
