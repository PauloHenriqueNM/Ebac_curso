document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-calculo'); //importa o formulário
    const resultadoElement = document.getElementById('resultado-element'); //importando do html paragrafos de resultado

    form.addEventListener('submit', (event) => { //aplicando o evento e deixando o botão default
        event.preventDefault();
        resultadoElement.classList.remove('novosdados', 'resultado-positivo', 'resultado-negativo'); // removendo a marca ao limpar a tela

        const primeiroNumero = parseFloat(document.getElementById('primeiro-numero').value); //importe do número A inserido pelo usuário
        const segundoNumero = parseFloat(document.getElementById('segundo-numero').value); //importe do numero B inserido pelo usuário
        const mensagemSucesso = `O campo B: ${segundoNumero} é maior que o campo A: ${primeiroNumero} .` //mensagem de sucesso quando o numero B é maior
        const mensagemErro = `Formulário inválido insira o número no campo B maior!`; // mensagem de erro quando o numero B é menor



        if (segundoNumero <= primeiroNumero) { //comparando os valores
            resultadoElement.textContent = mensagemErro; //casos negativos
            resultadoElement.classList.add('resultado-negativo');
        } else {
            resultadoElement.textContent = mensagemSucesso; //casos positivo
            resultadoElement.classList.add('resultado-positivo');
        }
    });
    form.addEventListener('reset', () => { //funcionalidade para o botão limpar
        resultadoElement.textContent = 'Insira novos dados';
        resultadoElement.classList.add('novosdados')
    });

});