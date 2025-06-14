// Login modal functionality
export function initializeLoginModal() {
    const modal = document.getElementById('loginModal');
    const loginBtn = document.getElementById('loginBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const submitBtn = document.getElementById('submitLoginBtn');
    const errorMessage = document.getElementById('errorMessage');

    function openModal() {
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        errorMessage.textContent = '';
    }

    loginBtn?.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);

    // Close modal with Esc key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });

    // Login form submission
    submitBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            errorMessage.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        // A autenticação ainda não foi implementada.
        // Substitua este bloco por uma chamada real à API quando disponível.
        errorMessage.textContent = 'Funcionalidade em desenvolvimento.';
    });
}

// Contatos modal functionality
export function initializeContatosModal() {
    const modal = document.getElementById('contatosModal');
    const serviceBtns = document.querySelectorAll('.service-contact-btn');
    const closeBtn = document.getElementById('closeContatosModalBtn');
    const submitBtn = document.getElementById('submitContatosBtn');
    const errorMessage = document.getElementById('contatosErrorMessage');
    const form = document.getElementById('contatosForm');
    const servicoInput = document.getElementById('servico');

    function openModal() {
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        errorMessage.textContent = '';
        form.reset();
    }

    // Máscara para o telefone
    const telefoneInput = document.getElementById('telefone');
    telefoneInput?.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = value;
        }
    });    // Adiciona evento para cada botão de serviço
    serviceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const servico = btn.getAttribute('data-service');
            // Configura o modal com base no serviço
            const contatoGeral = document.getElementById('contatoGeral');
            const contatoGestor = document.getElementById('contatoGestor');
            const contatoGestorCombustiveis = document.getElementById('contatoGestorCombustiveis');
            // Esconde todos os contatos primeiro
            contatoGeral.style.display = 'none';
            contatoGestor.style.display = 'none';
            contatoGestorCombustiveis.style.display = 'none';
            document.getElementById('contatoGestorCacambas').style.display = 'none';

            // Mostra o contato apropriado baseado no serviço
            if (servico === 'Carretas') {
                contatoGestor.style.display = 'block';
                modal.querySelector('#contatosModalTitle').textContent = 'Gestor de Carretas';
            } else if (servico === 'Combustíveis') {
                contatoGestorCombustiveis.style.display = 'block';
                modal.querySelector('#contatosModalTitle').textContent = 'Gestor de Combustíveis';
            } else if (servico === 'Caçambas') {
                document.getElementById('contatoGestorCacambas').style.display = 'block';
                modal.querySelector('#contatosModalTitle').textContent = 'Gestores de Caçambas';
            } else {
                contatoGeral.style.display = 'block';
                modal.querySelector('#contatosModalTitle').textContent = 'Fale Conosco';
                servicoInput.value = servico;
            }

            openModal();
        });
    });

    closeBtn?.addEventListener('click', closeModal);

    // Fechar modal com Esc
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });

    // Envio do formulário
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validação básica
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Verifica se todos os campos estão preenchidos
        if (Object.values(data).some(value => !value)) {
            errorMessage.textContent = 'Por favor, preencha todos os campos.';
            return;
        }

        try {
            // Aqui você pode implementar o envio real dos dados
            // Por enquanto, apenas simularemos um sucesso
            // Remove este log em produção ou substitua por uma integração real

            // Simula um delay de processamento
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Feedback de sucesso
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';

            // Limpa o formulário após 2 segundos e fecha o modal
            setTimeout(() => {
                closeModal();
            }, 2000);

        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Erro ao enviar mensagem. Por favor, tente novamente.';
        }
    });
}
