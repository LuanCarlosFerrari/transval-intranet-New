// Define a base URL dependendo do ambiente
const baseUrl = window.location.hostname === 'luancarlosferrari.github.io'
    ? '/transval-intranet-New'
    : '';

const clientsConfig = {
    biosev: {
        name: 'Biosev',
        url: 'https://biosev.com.br/',
        image: `${baseUrl}/Assets/clients/biosev.png`
    },
    rumo: {
        name: 'Rumo Logística',
        url: 'https://rumolog.com/',
        image: `${baseUrl}/Assets/clients/Rumo-logistica-logo-clipart.png`
    },
    ldc: {
        name: 'LDC',
        url: 'https://www.ldc.com/br/pt/',
        image: `${baseUrl}/Assets/clients/LDC.png`
    },
    viterra: {
        name: 'Viterra',
        url: 'https://www.viterra.us/',
        image: `${baseUrl}/Assets/clients/viterra.png`
    },
    caramuru: {
        name: 'Caramuru',
        url: 'https://caramuru.com/',
        image: `${baseUrl}/Assets/clients/caramuru.png`
    },
    cofco: {
        name: 'Cofco Agri',
        url: 'https://br.cofcointernational.com/',
        image: `${baseUrl}/Assets/clients/cofco.png`
    },
    raizen: {
        name: 'Raizen',
        url: 'https://www.raizen.com.br/',
        image: `${baseUrl}/Assets/clients/raizen.png`
    },
    fertipar: {
        name: 'Fertipar',
        url: 'https://fertipar.com.br/',
        image: `${baseUrl}/Assets/clients/fertipar.png`
    },
    yara: {
        name: 'Yara',
        url: 'https://www.yarabrasil.com.br/',
        image: `${baseUrl}/Assets/clients/yara.png`
    },
    copersucar: {
        name: 'Copersucar',
        url: 'https://www.copersucar.com.br/',
        image: `${baseUrl}/Assets/clients/copersucar.png`
    },
    heringer: {
        name: 'Heringer',
        url: 'https://www.heringer.com.br/',
        image: `${baseUrl}/Assets/clients/heringer.png`
    },
    nutrien: {
        name: 'Nutrien',
        url: 'https://nutrien.com.br/',
        image: `${baseUrl}/Assets/clients/nutrien.png`
    },
    mosaic: {
        name: 'Mosaic Fertilizantes',
        url: 'https://mosaicco.com.br/',
        image: `${baseUrl}/Assets/clients/mosaic.png`
    },
    cargill: {
        name: 'Cargill',
        url: 'https://www.cargill.com.br/',
        image: `${baseUrl}/Assets/clients/cargill.png`
    },
    inpasa: {
        name: 'Inpasa',
        url: 'https://www.inpasa.com.br/',
        image: `${baseUrl}/Assets/clients/inpasa.png`
    },
    cibra: {
        name: 'Cibra',
        url: 'https://www.cibra.com/',
        image: `${baseUrl}/Assets/clients/cibra.png`
    },
    adufertil: {
        name: 'Adufértil',
        url: 'https://www.adufertil.com.br/',
        image: `${baseUrl}/Assets/clients/adufertil.png`
    },
    araguaia: {
        name: 'Araguaia',
        url: 'https://www.araguaia.com.br/pt',
        image: `${baseUrl}/Assets/clients/araguaia.png`
    }
};

// Função para gerar os cards de clientes na página
document.addEventListener('DOMContentLoaded', () => {
    const clientsGrid = document.querySelector('.clients-grid');

    // Clear any existing content
    if (clientsGrid) {
        clientsGrid.innerHTML = '';

        // Generate client cards from the clientsConfig object
        Object.entries(clientsConfig).forEach(([key, client]) => {
            const clientCard = document.createElement('a');
            clientCard.href = client.url;
            clientCard.className = 'client-card';
            clientCard.target = '_blank';
            clientCard.rel = 'noopener noreferrer';

            const clientImage = document.createElement('img');
            clientImage.src = client.image;
            clientImage.alt = `Logo ${client.name}`;
            clientImage.loading = 'lazy';

            clientCard.appendChild(clientImage);
            clientsGrid.appendChild(clientCard);
        });
    }
});