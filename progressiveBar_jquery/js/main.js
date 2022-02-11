
$(function(){

    $('.loading span').animate({
        width : $('.loading span').data('charge') + '%'
    },1000);

    var getCounter = parseInt($('.bar i').text());

    var MyCounter = setInterval(function(){
        if(getCounter !== 101){
            $('.bar i').text(getCounter++ + '%');
        }else{
            clearInterval(MyCounter);
            $('.bar i').text('From 100%'); 
        };

    },10);

});

