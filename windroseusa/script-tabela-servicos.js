// script-tabela-servicos.js

function coletarDadosTabela() {
    const tabela = document.getElementById('tabela-precos');
    const linhas = tabela.querySelectorAll('.user-table-row2');
    const dados = [];

    linhas.forEach((linha) => {
        // Selecionando corretamente os valores de cada linha
        const item = linha.querySelector('[data-name^="item"]')?.textContent.trim() || 'N/A';
        const periodo = linha.querySelector('[data-name^="periodo"]')?.textContent.trim() || 'N/A';
        const preco = linha.querySelector('[data-name^="preco"]')?.textContent.trim() || 'N/A';

        dados.push({ item, periodo, preco });
    });

    return dados;
}

/*
async function enviarDados() {
    const dados = coletarDadosTabela();
    console.table(dados); // Exibe os dados no console de forma tabular

    const json = JSON.stringify(dados);

    try {
        const response = await fetch('https://hook.us1.make.com/amtx29ynz849d84rqdojlro778p8dx77', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: json
        });

        if (response.ok) {
            console.log('Dados enviados com sucesso:', json);
        } else {
            console.error('Erro ao enviar dados:', response.statusText);
        }
    } catch (error) {
        console.error('Erro de conexão:', error);
    }
}
*/