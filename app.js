document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hitungTotal").addEventListener("click", function () {
    let tipeKamar = document.getElementById("tipeKamar").value;
    let durasiMenginap = parseInt(
      document.getElementById("durasiMenginap").value
    );
    let termasukBreakfast =
      document.getElementById("termasukBreakfast").checked;
    let totalBayar = 0;
    let harga = 0;

    // Harga per tipe kamar
    if (tipeKamar === "standar") {
      harga = 500000;
    } else if (tipeKamar === "deluxe") {
      harga = 750000;
    } else if (tipeKamar === "family") {
      harga = 1000000;
    }

    // Menampilkan harga pada form
    document.getElementById("harga").value = harga;

    totalBayar = harga * durasiMenginap;

    // Diskon jika menginap lebih dari 3 hari
    if (durasiMenginap > 3) {
      totalBayar -= totalBayar * 0.1;
    }

    // Tambahan biaya breakfast jika dicentang
    if (termasukBreakfast) {
      totalBayar += 80000 * durasiMenginap;
    }

    // Menampilkan total bayar pada form
    document.getElementById("totalBayar").value = totalBayar;
  });

  document.addEventListener("DOMContentLoaded", () => {
    const inputNomorIdentitas = document.getElementById("nomor_identitas");

    inputNomorIdentitas.addEventListener("input", () => {
      const nomorIdentitas = inputNomorIdentitas.value;

      if (nomorIdentitas.length < 16) {
        inputNomorIdentitas.style.borderColor = "red";
        inputNomorIdentitas.setCustomValidity(
          "Nomor identitas harus 16 digit."
        );
        inputNomorIdentitas.reportValidity();
      } else {
        inputNomorIdentitas.style.borderColor = "green";
        inputNomorIdentitas.setCustomValidity("");
      }
    });
  });

  function hitungTotalBayar() {
    const tipe = document.getElementById("tipe_kamar").value;
    const durasi = document.getElementById("durasi_menginap").value;
    const breakfast = document.getElementById("termasuk_breakfast").checked;

    let hargaPerMalam;

    if (tipe === "Standar") {
      hargaPerMalam = 500000;
    } else if (tipe === "Deluxe") {
      hargaPerMalam = 750000;
    } else {
      hargaPerMalam = 1000000;
    }

    // Mengupdate kolom harga dengan harga per malam berdasarkan tipe kamar
    document.getElementById("harga").value =
      "Rp " + hargaPerMalam.toLocaleString("id-ID");

    const totalBayar =
      durasi * hargaPerMalam + (breakfast ? durasi * 50000 : 0);
    document.getElementById("total_bayar").value =
      "Rp " + totalBayar.toLocaleString("id-ID");
  }

  // Panggil fungsi updateHarga() saat pertama kali halaman dimuat
  window.onload = function () {
    updateHarga(); // Menampilkan harga pertama kali berdasarkan pilihan default
  };

  function updateHarga() {
    const tipe = document.getElementById("tipe_kamar").value;

    let hargaPerMalam;

    if (tipe === "Standar") {
      hargaPerMalam = 500000;
    } else if (tipe === "Deluxe") {
      hargaPerMalam = 750000;
    } else {
      hargaPerMalam = 1000000;
    }

    // Update kolom harga
    document.getElementById("harga").value =
      "Rp " + hargaPerMalam.toLocaleString("id-ID");
  }
});
