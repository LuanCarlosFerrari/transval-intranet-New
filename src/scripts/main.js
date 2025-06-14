import { aboutContent } from './presentation.js';
import { initializeLoginModal, initializeContatosModal } from './modal.js';

// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuButton?.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        mobileMenuButton.setAttribute('aria-expanded', isOpen.toString());
    });

    // Initialize modals
    initializeLoginModal();
    initializeContatosModal();
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutDiv = document.getElementById('about-presentation');
    if (aboutDiv && aboutContent && aboutContent.presentation) {
        aboutDiv.innerHTML = aboutContent.presentation;
    }
});

// Atualiza o ano no footer automaticamente
document.getElementById('year').textContent = new Date().getFullYear();
