document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    const placa = document.getElementById('placa').value;
    const proprietario = document.getElementById('proprietario').value;
    const numeroApartamento = document.getElementById('numero-apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const numeroVaga = document.getElementById('numero-vaga').value;

    // Exibe as informações no console
    console.log(`Cadastro realizado:\nPlaca: ${placa}\nProprietário: ${proprietario}\nApartamento: ${numeroApartamento}\nBloco: ${bloco}\nModelo: ${modelo}\nCor: ${cor}\nVaga: ${numeroVaga}`);

    // Exibe a mensagem de confirmação
    document.getElementById('mensagem').innerText = "Cadastro realizado com sucesso!";
    alert("Cadastro realizado com sucesso!");

    // Limpa o formulário
    document.getElementById('form-cadastro').reset();
});

// Função para listar vagas cadastradas (pode ser melhorada com dados reais futuramente)
function listarVagas() {
    const listaVagas = document.getElementById('lista-vagas');
    // Exemplo de vagas cadastradas (pode ser substituído por dados dinâmicos no futuro)
    const vagas = [
        { placa: 'ABC-1234', proprietario: 'João Silva', vaga: '1A' },
        { placa: 'XYZ-5678', proprietario: 'Maria Oliveira', vaga: '2B' }
    ];

    vagas.forEach(vaga => {
        const li = document.createElement('li');
        li.textContent = `Vaga ${vaga.vaga}: Placa ${vaga.placa} - Proprietário ${vaga.proprietario}`;
        listaVagas.appendChild(li);
    });
}

// Chama a função para listar vagas ao carregar a página
listarVagas();
