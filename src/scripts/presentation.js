// Define a base URL dependendo do ambiente
const baseUrl = window.location.hostname === 'luancarlosferrari.github.io'
    ? '/transval-intranet-New'
    : '';

export const aboutContent = {
    presentation: `
        <div class="history-content" style="display: flex; flex-direction: column; align-items: center;">
            <img src="${baseUrl}/Assets/logo-branca-transval.png" alt="Logo Transval" class="history-logo" style="margin: 0 auto; display: block; max-width: 200px; height: auto;">
            <br>            <p class="company-history" style="text-align: center;"><strong>NOSSA HISTÓRIA:</strong></p>
            <p class="company-history" style="text-align: center;">Desde 1987, construímos uma trajetória pautada na solidez e na evolução contínua. Sediados em Rinópolis (SP), expandimos de forma estruturada, incorporando unidades operacionais em Rondonópolis (MT) e Sumaré (SP) para aprimorar a cobertura nacional e otimizar o fluxo de cargas.<br><br> A constituição de frota própria e a oferta de serviços de agenciamento reforçam nosso controle sobre os processos logísticos, assegurando maior agilidade, segurança e eficiência. Guiados pelos valores que originaram a companhia, mantemos o propósito de oferecer soluções completas e personalizadas, preservando a confiança de nossos clientes e o comprometimento com a excelência que norteia cada etapa de nossas operações.</p>
            
            <!-- Timeline -->
            <div class="timeline">
                <div class="event">
                    <div class="content">
                        <h3>1987 <span>Fundação</span></h3>
                        <p>Criação da empresa familiar por Onevaldo e Valmir, em Rinópolis – SP.</p>
                    </div>
                </div>

                <div class="event">
                    <div class="content">
                        <h3>2000 <span>Frota própria</span></h3>
                        <p>Consolidação de frota própria, garantindo agilidade, controle e segurança.</p>
                    </div>
                </div>

                <div class="event">
                    <div class="content">
                        <h3>2010 <span>Unidade Rondonópolis</span></h3>
                        <p>Abertura da unidade em Rondonópolis – MT para apoiar nossa operação no Centro-Oeste.</p>
                    </div>
                </div>

                <div class="event">
                    <div class="content">
                        <h3>2014 <span>Agenciamento de Cargas</span></h3>
                        <p>Início do serviço de agenciamento, conectando soluções logísticas em todo o Brasil.</p>
                    </div>
                </div>

                <div class="event">
                    <div class="content">
                        <h3>2018 <span>Unidade Sumaré</span></h3>
                        <p>Implantação da unidade em Sumaré – SP, reforçando a presença no Sudeste.</p>
                    </div>
                </div>

                <div class="event">
                    <div class="content">
                        <h3>Hoje <span>Excelência Contínua</span></h3>
                        <p>Seguimos evoluindo para oferecer as melhores soluções em transporte e logística.</p>
                    </div>
                </div>
            </div>
            <br>            <p class="company-history" style="text-align: center;"><strong>NOSSO PROPÓSITO:</strong></p>
            <p class="company-history" style="text-align: center;">Ser um parceiro estratégico dos nossos clientes e transformar a logística nacional com soluções eficientes, transparentes e seguras. Nosso compromisso é entregar qualidade, pontualidade e inovação, atender às necessidades específicas de cada cliente e promover a sustentabilidade, contribuindo ativamente para o avanço do agronegócio e da indústria.</p>
            
            <p class="company-history" style="text-align: center;"><strong>NOSSOS PRINCÍPIOS:</strong></p>
            <ul class="company-history" style="list-style-type: none; padding-left: 0; text-align: center;">
                <li style="text-align: center;"><strong>FOCO NO CLIENTE E NOS RESULTADOS</strong></li>
                <li style="text-align: center;">Priorizar as necessidades dos clientes, buscando sempre entregar soluções ágeis, eficazes e com resultados positivos.</li>
                
                <li style="text-align: center;"><strong>AGILIDADE E RAPIDEZ</strong></li>
                <li style="text-align: center;">Responder de forma célere e eficiente, reconhecendo a importância do tempo na construção de relações de sucesso.</li>
                
                <li style="text-align: center;"><strong>QUALIDADE E EXCELÊNCIA</strong></li>
                <li style="text-align: center;">Garantir processos e entregas de alta qualidade, desenvolvendo com precisão o que foi proposto.</li>
                
                <li style="text-align: center;"><strong>RESPONSABILIDADE E COMPROMISSO</strong></li>
                <li style="text-align: center;">Assumir responsabilidades, agir com ética, transparência e dedicação em todas as ações e decisões.</li>
                
                <li style="text-align: center;"><strong>COMUNICAÇÃO E COLABORAÇÃO</strong></li>
                <li style="text-align: center;">Promover integração entre as áreas, garantindo uma comunicação clara e eficaz para alcançar objetivos comuns.</li>
                
                <li style="text-align: center;"><strong>SEGURANÇA E CONFIABILIDADE</strong></li>
                <li style="text-align: center;">Assegurar a execução segura de todas as atividades, conectando pessoas e negócios com confiança.</li>
                
                <li style="text-align: center;"><strong>TRABALHO EM EQUIPE E INTEGRAÇÃO</strong></li>
                <li style="text-align: center;">Valorizar o espírito colaborativo, unindo esforços para superar desafios e alcançar metas com eficiência.</li>
            </ul>
        </div>
        
    `,
    mission: `
        <div class="mission-content">
            <br>

            
            <p class="company-history" style="text-align: center;"><strong>NOSSO PROPÓSITO:</strong></p>
            <p class="company-history" style="text-align: center;">Ser um parceiro estratégico dos nossos clientes e transformar a logística nacional com soluções eficientes, transparentes e seguras. Nosso compromisso é entregar qualidade, pontualidade e inovação, atender às necessidades específicas de cada cliente e promover a sustentabilidade, contribuindo ativamente para o avanço do agronegócio e da indústria.</p>
            
            <p class="company-history" style="text-align: center;"><strong>NOSSOS PRINCÍPIOS:</strong></p>
            <ul class="company-history" style="list-style-type: none; padding-left: 0; text-align: center;">
                <li style="text-align: center;"><strong>FOCO NO CLIENTE E NOS RESULTADOS</strong></li>
                <li style="text-align: center;">Priorizar as necessidades dos clientes, buscando sempre entregar soluções ágeis, eficazes e com resultados positivos.</li>
                
                <li style="text-align: center;"><strong>AGILIDADE E RAPIDEZ</strong></li>
                <li style="text-align: center;">Responder de forma célere e eficiente, reconhecendo a importância do tempo na construção de relações de sucesso.</li>
                
                <li style="text-align: center;"><strong>QUALIDADE E EXCELÊNCIA</strong></li>
                <li style="text-align: center;">Garantir processos e entregas de alta qualidade, desenvolvendo com precisão o que foi proposto.</li>
                
                <li style="text-align: center;"><strong>RESPONSABILIDADE E COMPROMISSO</strong></li>
                <li style="text-align: center;">Assumir responsabilidades, agir com ética, transparência e dedicação em todas as ações e decisões.</li>
                
                <li style="text-align: center;"><strong>COMUNICAÇÃO E COLABORAÇÃO</strong></li>
                <li style="text-align: center;">Promover integração entre as áreas, garantindo uma comunicação clara e eficaz para alcançar objetivos comuns.</li>
                
                <li style="text-align: center;"><strong>SEGURANÇA E CONFIABILIDADE</strong></li>
                <li style="text-align: center;">Assegurar a execução segura de todas as atividades, conectando pessoas e negócios com confiança.</li>
                
                <li style="text-align: center;"><strong>TRABALHO EM EQUIPE E INTEGRAÇÃO</strong></li>
                <li style="text-align: center;">Valorizar o espírito colaborativo, unindo esforços para superar desafios e alcançar metas com eficiência.</li>
            </ul>
        </div>
    `
};
