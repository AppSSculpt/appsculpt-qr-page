// Obtenha os valores da URL para código QR e material
var urlParams = new URLSearchParams(window.location.search);
var qrCodeValue = urlParams.get("qr_code");
var materialValue = urlParams.get("material");

// Chame a função para configurar o código QR primeiro
createQRCode(qrCodeValue);

// Função para criar o código QR e exibir o valor
function createQRCode(qrCodeValue) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeValue,
        width: 200,
        height: 200,
    });

    // Exiba o valor do código QR em um elemento HTML com o ID "codigo"
    var qrCodeValueDisplay = document.getElementById("codigo");
    qrCodeValueDisplay.textContent = "Código: " + qrCodeValue;

    // Após configurar o código QR, chame a função para exibir o nome do material
    displayMaterial(materialValue);
}

// Função para exibir o nome do material
function displayMaterial(materialValue) {
    document.getElementById("material").textContent = "Material: " + materialValue;
}

// Função para criar a imagem personalizada e configurar o link de download
function createCustomImageAndDownload() {
    // Selecione o contêiner que você deseja capturar
    var container = document.getElementById("qrcode-container");

    // Obtenha o fator de zoom da página
    var zoomFactor = window.innerWidth / window.outerWidth;

    // Aplique o fator de zoom ao tamanho do contêiner
    container.style.transform = "scale(" + 1 / zoomFactor + ")";

    // Crie um novo elemento de imagem
    var customImage = new Image();
    customImage.src = "data:image/svg+xml," + encodeURIComponent(container.innerHTML);

    // Restaure o tamanho original do contêiner
    container.style.transform = "scale(1)";

    // Crie um link temporário para fazer o download
    var downloadLink = document.createElement("a");
    downloadLink.href = customImage.src;
    downloadLink.download = "custom_image.png";

    // Simule o clique no link para iniciar o download
    downloadLink.click();
}

// Verifique se o botão de download com o ID "downloadCustomImage" existe no seu HTML antes de adicionar o evento de clique
var downloadButton = document.getElementById("downloadCustomImage");
if (downloadButton) {
    downloadButton.addEventListener("click", createCustomImageAndDownload);
}
