function mudarSorteio() {
    const tipoSorteio = document.getElementById('tipoSorteio').value;
    const campoNomes = document.getElementById('campoNomes');
    const campoNumeros = document.getElementById('campoNumeros');
    const botaoSorteio = document.getElementById('botaoSorteio');

    if (tipoSorteio === 'nomes') {
        campoNomes.style.display = 'block';
        campoNumeros.style.display = 'none';
        validarCampos();  // Verificar se os campos estão preenchidos
    } else {
        campoNomes.style.display = 'none';
        campoNumeros.style.display = 'block';
        validarCampos();  // Verificar se os campos estão preenchidos
    }
}

function validarCampos() {
    const tipoSorteio = document.getElementById('tipoSorteio').value;
    const nomeInput = document.getElementById('nomes').value;
    const minNumero = document.getElementById('minNumero').value;
    const maxNumero = document.getElementById('maxNumero').value;
    const botaoSorteio = document.getElementById('botaoSorteio');

    if (tipoSorteio === 'nomes' && nomeInput.trim() !== '') {
        botaoSorteio.disabled = false;
    } else if (tipoSorteio === 'numeros' && minNumero && maxNumero && parseInt(minNumero) < parseInt(maxNumero)) {
        botaoSorteio.disabled = false;
    } else {
        botaoSorteio.disabled = true;
    }
}

function sortear() {
    const tipoSorteio = document.getElementById('tipoSorteio').value;
    let resultado = '';
    if (tipoSorteio === 'nomes') {
        const nomes = document.getElementById('nomes').value.split(',');
        resultado = nomes[Math.floor(Math.random() * nomes.length)].trim();
    } else {
        const min = parseInt(document.getElementById('minNumero').value);
        const max = parseInt(document.getElementById('maxNumero').value);
        resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;

    // Adicionar ao histórico
    const historicoLista = document.getElementById('historicoLista');
    const li = document.createElement('li');
    li.textContent = `Resultado: ${resultado} - Sorteio de ${tipoSorteio}`;
    historicoLista.appendChild(li);
    validarCampos();  // Verificar novamente a habilitação do botão
}
