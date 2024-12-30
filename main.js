$(document).ready(function(){
    //quando clicar em "nova imagem", aparece o evento de exibição de display
    $('header button').click(function(){
        $('form').slideDown();
    })

    
    //quando clicar em "cancelar", o display é recolhido
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })


    //quando clicar em "adicionar", a pagina não atualiza
    $('form').on('submit', function(e) {
        e.preventDeFault();
        const urlAdd = $('#url-img').val ();
        const novoItem = $('<li style ="display:none"></li>');
        $(`<img src="${urlAdd}" />`).appendTo(novoItem);

        $(` <div class = "overlay-img-link"> 
            <a href = "${urlAdd}" targer="_blank" title= "Ver imagem e tamanho real">
            Ver imagem em tamanho real </a> 
            </div>`).appendTo(novoItem);
            

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#url-img').val('')
    })
})