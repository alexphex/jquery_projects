
$(function(){
    $('.accordion .accordion-head').on('click', funcAccord);
});

function funcAccord(){
    $('.accordion .accordion-body').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(2000);
}

