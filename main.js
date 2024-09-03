const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiário");
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `Valor de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b> com sucesso!`;
    
    formEValido = validaNome(nomeBeneficiario.value)
        if (formEValido) {
            const containerMensagemSucesso = document.querySelector('.sucesso-mensagem');
            containerMensagemSucesso.innerHTML = mensagemSucesso;
            containerMensagemSucesso.style.display = 'block';

            nomeBeneficiario.value = " ";
            numeroContaBeneficiario.value = " ";
            valorDeposito.value = " ";
        } else {
            document.querySelector('.mensagem-erro').style.display = 'block';
        }
    }    
)

nomeBeneficiario.addEventListener('change', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido){
        nomeBeneficiario.classList.add('error');
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';
    }
})