$('nav div').click(function(){
    $($branding).css("display", "none");
    $(this).addClass('active');
});

$('nav div.active').click(function(){
    $($branding).css("display", "block");
    $(this).removeClass();
});
