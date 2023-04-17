// Get the modal
var modal = document.getElementById("modalPassword");

// Get the button that opens the modal
var btnPassword = document.getElementById("btnPassword");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnPassword.onclick = function () {
    modal.style.display = "block";
    document.getElementById("txtPassword").focus();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to check password and start download
var btnDownload = document.getElementById("btnDownload");
btnDownload.onclick = function () {
    var password = document.getElementById("txtPassword").value;
    if (password === "*2023Luis") { // Reemplaza "*2023Luis" con la contraseña real
        // Change the href property of the download link to point to the protected PDF file.
        var downloadLink = document.createElement("a");
        downloadLink.href = "./luis.pdf"; // Reemplaza "./luis.pdf" con la ruta correcta a tu archivo PDF
        downloadLink.download = "CV_Luis_Sebastian_Martinez_Morinigo.pdf"; // Reemplaza "CV_Luis_Sebastian_Martinez_Morinigo.pdf" con el nombre que quieres que tenga el archivo descargado por el usuario
        downloadLink.click();
        modal.style.display = "none";
    } else {
        alert("Contraseña incorrecta, intenta de nuevo");
    }
}
