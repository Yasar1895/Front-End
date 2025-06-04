function generateQRCode() {
  const input = document.getElementById("qrInput").value;
  const qrCodeDiv = document.getElementById("qrCode");

  if (!input) {
    alert("Please enter some text or URL.");
    return;
  }

  // Clear previous QR code
  qrCodeDiv.innerHTML = "";

  // Generate new QR code
  QRCode.toCanvas(input, { width: 200 }, function (err, canvas) {
    if (err) {
      console.error(err);
      alert("Failed to generate QR code.");
      return;
    }
    qrCodeDiv.appendChild(canvas);
  });
}
