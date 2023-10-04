// Function to create the QR code
function createQRCode(qrCodeValue) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeValue,
        width: 200,
        height: 200,
    });
}

// Function to display the material name
function displayMaterial(materialValue) {
    document.getElementById("material").textContent = "Material: " + materialValue;
}

// Function to display the code name
function displayCodigo(codigoValue) {
    document.getElementById("codigo").textContent = "Code: " + codigoValue;
}

// Function to create the custom image and set up the download link
function createCustomImageAndDownload() {
    // Select the container you want to capture
    var container = document.getElementById("qrcode-container");

    // Get the zoom factor of the page
    var zoomFactor = window.innerWidth / window.outerWidth;

    // Apply the zoom factor to the container size
    container.style.transform = "scale(" + 1 / zoomFactor + ")";

    // Create a new image element
    var customImage = new Image();
    customImage.src = "data:image/svg+xml," + encodeURIComponent(container.innerHTML);

    // Restore the original size of the container
    container.style.transform = "scale(1)";

    // Create a temporary link for downloading
    var downloadLink = document.createElement("a");
    downloadLink.href = customImage.src;
    downloadLink.download = "custom_image.png";

    // Simulate a click on the link to initiate the download
    downloadLink.click();
}

// Check if the download button with the ID "downloadCustomImage" exists in your HTML before adding the click event
var downloadButton = document.getElementById("downloadCustomImage");
if (downloadButton) {
    downloadButton.addEventListener("click", createCustomImageAndDownload);
}

// Get the values from the URL for QR code, material, and code
var urlParams = new URLSearchParams(window.location.search);
var qrCodeValue = urlParams.get("qr_code");
var materialValue = urlParams.get("material");
var codigoValue = urlParams.get("codigo");

// Call the functions to set up the QR code, material name, and code name
createQRCode(qrCodeValue);
displayMaterial(materialValue);
displayCodigo(codigoValue);

// Detecta quando o usuário rola a página
$(window).scroll(function() {
    // Verifique a posição de rolagem
    if ($(this).scrollTop() > 100) { // Altere o valor 100 para a quantidade desejada de rolagem antes de fixar a barra de navegação
        $('.navbar').addClass('fixed');
    } else {
        $('.navbar').removeClass('fixed');
    }
});

