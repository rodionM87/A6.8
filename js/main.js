$(document).ready(function(){

    const btnProgOne = $('#btnProg1');
    const btnProgThree = $('#btnProg3');
    const btnProgSeven = $('#btnProg7');
    
    

    btnProgOne.on('click', function(){
        
        $(".progress-bar").attr("style", "width: 1%");
    });

    btnProgThree.on('click', function(){
        $(".progress-bar").attr("style", "width: 3%");
    });

    btnProgSeven.on('click', function(){
        $(".progress-bar").attr("style", "width: 7%");
    });
});
