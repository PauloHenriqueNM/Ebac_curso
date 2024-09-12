$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(DDD) 1234-5678'
    });

    $('#cpf').mask('000.000.000-00',{
        placeholder:'123.456.789-10'
    });

    $('#cep').mask('0000-000',{
        placeholder:'1234-567'
    });

    $('form').validate({
        rules:{
            nome: {
                required:true
            },
            email: {
                required:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required: true
            },
            endereco:{
                required: true
            },
            cep: {
                required: true
            }
        },

        submitHandler: function(form){
            alert(`Cadastro finalizado com sucesso!`);
            form.reset();
        }
    })
});



