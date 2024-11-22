document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const closeSidebar = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");

    
    if (menuButton && closeSidebar && sidebar) {
       
        menuButton.addEventListener("click", () => {
            sidebar.style.left = "0"; 
        });

        
        closeSidebar.addEventListener("click", () => {
            sidebar.style.left = "-250px"; 
        });
    } else {
        console.error("Elementos do menu não encontrados. Verifique o HTML.");
    }
});


function showSuccessMessage() {
    alert("Sucesso!");
}


document.addEventListener("DOMContentLoaded", () => {
    
    const botoesResponder = document.querySelectorAll('.botaoResponder');

    botoesResponder.forEach(botao => {
        botao.addEventListener('click', () => {
            const usuario = botao.getAttribute('data-usuario'); 
            exibirCaixaResposta(botao, usuario);
        });
    });
});


function exibirCaixaResposta(botao, usuario) {
    
    botao.style.display = 'none';

    
    const caixaResposta = document.createElement('div');
    caixaResposta.classList.add('caixaResposta');
    caixaResposta.innerHTML = `
        <input type="text" class="inputResposta" placeholder="Responda para ${usuario}">
        <button class="botaoEnviarResposta">Enviar</button>
    `;

    
    botao.after(caixaResposta);

    
    const botaoEnviar = caixaResposta.querySelector('.botaoEnviarResposta');
    botaoEnviar.addEventListener('click', () => {
        const inputResposta = caixaResposta.querySelector('.inputResposta');
        if (inputResposta.value.trim() !== '') {
            alert(`Sua resposta para ${usuario}: "${inputResposta.value}" foi enviada!`);
            inputResposta.value = ''; 
            caixaResposta.remove(); 
            botao.style.display = 'inline-block'; 
        } else {
            alert('Digite uma resposta antes de enviar.');
        }
    });
}


function exibirCaixaConfirmacao(usuario) {
    
    if (document.querySelector('.caixaConfirmacao')) return;

    
    const caixaConfirmacao = document.createElement('div');
    caixaConfirmacao.classList.add('caixaConfirmacao');
    caixaConfirmacao.innerHTML = `
        <p>Deseja enviar uma mensagem para ${usuario}?</p>
        <div class="botoesConfirmacao">
            <button id="botaoSim">Sim</button>
            <button id="botaoNao">Não</button>
        </div>
    `;


    document.body.appendChild(caixaConfirmacao);

    
    document.getElementById('botaoSim').addEventListener('click', () => {
        alert('Enviado!');
        caixaConfirmacao.remove(); 
    });

    document.getElementById('botaoNao').addEventListener('click', () => {
        alert('Mensagem não enviada!');
        caixaConfirmacao.remove(); 
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const botoesAjudar = document.querySelectorAll('.ajudarButton');
    botoesAjudar.forEach(botao => {
        botao.addEventListener('click', () => {
            const usuario = botao.closest('.help-request').querySelector('strong').textContent;
            exibirCaixaConfirmacao(usuario);
        });
    });
}); 