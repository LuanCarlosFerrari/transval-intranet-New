// Define a base URL dependendo do ambiente
const baseUrl = window.location.hostname === 'luancarlosferrari.github.io'
    ? '/transval-intranet-New'
    : '';

// Configuração das imagens
const imagePaths = {
    favicon: `${baseUrl}/Assets/logo.png`,
    headerLogo: `${baseUrl}/Assets/logo.png`,
    heroWallpaper: `${baseUrl}/Assets/wp3704699-logistics-wallpapers.jpg`,
    heroBanner: `${baseUrl}/Assets/banner.svg`
};

// Função para configurar as imagens
export function setupImages() {
    // Set favicon
    const favicon = document.getElementById('favicon');
    if (favicon) {
        favicon.href = imagePaths.favicon;
    }

    // Set header logo
    const headerLogo = document.getElementById('header-logo');
    if (headerLogo) {
        headerLogo.src = imagePaths.headerLogo;
    }

    // Set hero wallpaper
    const wallpaperImg = document.querySelector('.hero picture img');
    if (wallpaperImg) {
        wallpaperImg.src = imagePaths.heroWallpaper;
    }

    // Update banner overlay background
    const bannerOverlay = document.querySelector('.hero-banner-overlay');
    if (bannerOverlay) {
        bannerOverlay.style.backgroundImage = `url('${imagePaths.heroBanner}')`;
    }
}

// Configurar imagens quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', setupImages);
