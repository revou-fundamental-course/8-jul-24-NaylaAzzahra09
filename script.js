function hitungBMI() {
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value) / 100; // Konversi ke meter
    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
  
    let hasilText = "BMI Anda adalah: " + bmi.toFixed(2) + "<br>";
  
    // Tambahkan logika untuk menentukan kategori BMI berdasarkan jenis kelamin dan nilai BMI
  
    document.getElementById('hasil').innerHTML = hasilText;
  }