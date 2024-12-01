<?php
// Sambungkan ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hotel_db";

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Ambil data dari form dan periksa apakah data ada menggunakan isset()
$nama = isset($_POST['nama']) ? $_POST['nama'] : '';
$gender = isset($_POST['gender']) ? $_POST['gender'] : '';
$nomor_identitas = isset($_POST['nomor_identitas']) ? $_POST['nomor_identitas'] : '';
$tipe_kamar = isset($_POST['tipe_kamar']) ? $_POST['tipe_kamar'] : '';
$harga_kamar = isset($_POST['harga_kamar']) ? $_POST['harga_kamar'] : '';
$tanggal_pesan = isset($_POST['tanggal_pesan']) ? $_POST['tanggal_pesan'] : '';
$durasi_menginap = isset($_POST['durasi_menginap']) ? $_POST['durasi_menginap'] : '';
$termasuk_breakfast = isset($_POST['termasuk_breakfast']) ? 1 : 0; // Periksa jika breakfast dipilih
$total_bayar = isset($_POST['total_bayar']) ? $_POST['total_bayar'] : '';

// Masukkan data ke dalam database
$sql = "INSERT INTO pemesanan (nama, gender, nomor_identitas, tipe_kamar, harga_kamar, tanggal_pesan, durasi_menginap, termasuk_breakfast, total_bayar) 
        VALUES ('$nama', '$gender', '$nomor_identitas', '$tipe_kamar', '$harga_kamar', '$tanggal_pesan', '$durasi_menginap', '$termasuk_breakfast', '$total_bayar')";

// Eksekusi query dan cek apakah berhasil
if ($conn->query($sql) === TRUE) {
  echo "Pemesanan berhasil disimpan";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Tutup koneksi
$conn->close();
?>
