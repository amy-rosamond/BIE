$('#toggleMenu').on('click', function () {
    $('#menuBar').slideToggle()
});

function resize() {
    if (window.innerWidth > 800) {
        $('#menuBar').show()
    } else {
        $('#menuBar').hide()
    }
}

$(function () {
    resize();
    $(window).resize(resize)
});


$(function(){
    $("div.installation-item-more-info").click(function(){
        if ($("div.dropdown-content").hasClass("expanded")) {
            $("div.dropdown-content.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("div.dropdown-content").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});


// $(document).ready(function(){
//     $("div.installation-item-more-info").click(function(){
//       $("div.dropdown-content").slideToggle(1500);
//       $(this).toggleClass("open");
//     });
//   });