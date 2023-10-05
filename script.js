// Função para criar o código QR
function createQRCode(qrCodeValue) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrCodeValue,
        width: 200,
        height: 200,
    });
}

// Função para exibir o nome do material
function displayMaterial(materialValue) {
    document.getElementById("material").textContent = "Material: " + materialValue;
}

// Função para exibir o nome do código
function displayCodigo(codigoValue) {
    document.getElementById("qrcode").textContent = "Código: " + codigoValue;
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

// Obtenha os valores da URL para código QR, material e código
var urlParams = new URLSearchParams(window.location.search);
var qrCodeValue = urlParams.get("qr_code");
var materialValue = urlParams.get("material");
var codigoValue = urlParams.get("codigo");

// Chame as funções para configurar o código QR, o nome do material e o nome do código
createQRCode(qrCodeValue);
displayMaterial(materialValue);
displayCodigo(qrCodeValue);

        
        
                // Adicione um evento de clique ao botão de download
                // Função para criar a imagem personalizada
        
             // Função para criar a imagem personalizada e configurar o link de download
        function createCustomImageAndDownload() {
            // Selecione o contêiner que você deseja capturar
            var container = document.getElementById("qrcode-container");
        
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
        
        // Adicione um evento de clique ao botão de download
        document.getElementById("downloadCustomImage").addEventListener("click", createCustomImageAndDownload);

        
