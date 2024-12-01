const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Koneksi ke database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

// Endpoint untuk menyimpan data
app.post("/addBooking", (req, res) => {
  const { nama, nomor, gender, tipe, durasi, discount, total } = req.body;

  const query = `
    INSERT INTO pemesanan 
    (nama_pemesan, nomor_identitas, jenis_kelamin, tipe_kamar, durasi_menginap, discount, total_bayar)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [nama, nomor, gender, tipe, durasi, discount, total],
    (err, result) => {
      if (err) throw err;
      res.send("Data berhasil disimpan!");
    }
  );
});

// Jalankan server
app.listen(3000, () => console.log("Server running on port 3000"));
