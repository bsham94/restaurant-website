//Changes the styling of the Navbar after you scroll down
$(function () {
    $(document).on('scroll', () => {
        var $top_bar = $(".top-bar");
        var $nav = $(".navbar-custom");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $top_bar.height());
    });
});
//Adds the return to top button after scrolling
$(function () {
    $(document).on('scroll', () => {
        var $home = $("#home");
        var $returnTopButton = $(".back-to-top");
        if ($(this).scrollTop() > $home.height() / 3) {
            $returnTopButton.css("display", "initial")
        }
        else {
            $returnTopButton.css("display", "none")
        }

    });
});
// Adds or removes the active link class for the Navbar
$(function () {
    $(".nav-link").click(function () {
        // remove classes from all
        $(".nav-link").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });
});
// $("#contactbtn").click(function () {
//     $('html,body').animate({
//         scrollTop: $("#footer").offset().top
//     }, 5000);
// });
