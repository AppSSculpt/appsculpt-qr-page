// Função para criar o código QR
function createQRCode(qrCodeValue) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeValue,
        width: 150,
        height: 150,
    });
}

// Função para exibir o nome do material
function displayMaterial(materialValue) {
    document.getElementById("material").textContent = "Material: " + materialValue;
}

// Função para exibir o nome do código
function displayCodigo(codigoValue) {
    document.getElementById("codigo").textContent = "Código: " + codigoValue;
}

// Função para criar a imagem personalizada e configurar o link de download
function createCustomImageAndDownload() {
    // Selecione o contêiner que você deseja capturar
    var container = document.querySelector(".custom-qrcode-container");

    // Use a biblioteca html2canvas para capturar o conteúdo do contêiner
    html2canvas(container).then(function(canvas) {
        // Crie uma nova imagem a partir do canvas capturado
        var customImage = new Image();
        customImage.src = canvas.toDataURL("image/png");

        // Crie um link temporário para fazer o download
        var downloadLink = document.createElement("a");
        downloadLink.href = customImage.src;
        downloadLink.download = "custom_image.png";

        // Simule o clique no link para iniciar o download
        downloadLink.click();
    });
}

var downloadButton = document.getElementById("downloadCustomImage");
if (downloadButton) {
    downloadButton.addEventListener("click", createCustomImageAndDownload);
}

// Obtenha os valores da URL para código QR, material e código
var urlParams = new URLSearchParams(window.location.search);
var qrCodeValue = urlParams.get("qr_code");
var materialValue = urlParams.get("material");
var codigoValue = urlParams.get("qr_code");

createQRCode(qrCodeValue);
displayMaterial(materialValue);
displayCodigo(codigoValue);


window.addEventListener("scroll", function() {
    var h1 = document.querySelector("h1");
    if (window.scrollY > 0) {
        h1.style.top = "-100px"; // Esconda o h1 quando você descer
    } else {
        h1.style.top = "0"; // Mostre o h1 quando você estiver no topo
    }
});

