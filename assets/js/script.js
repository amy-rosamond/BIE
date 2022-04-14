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
