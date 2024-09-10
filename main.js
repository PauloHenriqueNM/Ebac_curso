$('form').on('submit', function (e) {
    e.preventDefault();

    const tarefaIncluir = $('#tarefa-incluir').val();
    const novaTarefa = $('<li></li>');

    $(`<li>${tarefaIncluir}</li>`).appendTo(novaTarefa);   
    $(novaTarefa).appendTo('ul').hide().fadeIn(1000);
    $('#tarefa-incluir').val('');
})

$('form').on('reset',function(e){
    $('ul').empty();
})

$('ul').on('click', 'li',function(){
    $(this).toggleClass('click');
})

