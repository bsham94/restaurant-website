$(() => {
    changeNavColour();
    showBackToTop();
    $(document).on("scroll", onScroll);
});

onScroll = () => {
    changeNavColour();
    showBackToTop();
    var scrollPos = $(window).scrollTop();
    $('.navbar-custom a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() >= scrollPos) {
            $('.navbar-custom ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

//Change Navbar Colour
changeNavColour = () => {
    $(".navbar-custom").toggleClass('scrolled', $(this).scrollTop() > $(".top-bar").height());
    $("#logo-light").toggleClass('hidden', $(this).scrollTop() > $(".top-bar").height());
    $("#logo-dark").toggleClass('hidden', $(this).scrollTop() < $(".top-bar").height());
}

//Adds the return to top button after scrolling
showBackToTop = () => {
    var $home = $("#home");
    var $returnTopButton = $(".back-to-top");
    if ($(this).scrollTop() > $home.height() / 3) {
        $returnTopButton.fadeIn("slow");
    }
    else {
        $returnTopButton.fadeOut("slow");
    }
};
// Menu Animations
$(() => {
    $('#appetizers-btn, #handhelds-btn, #entrees-btn').on('click', (e) => {
        $("#menus ul li").removeClass("active");
        switch (e.target.id) {
            case 'appetizers-btn':
                $("#appetizers-btn").addClass("active");
                if ($("#appetizers:hidden")) {
                    $("#menu-area .menu-item:visible").fadeOut('slow');
                    $("#appetizers").fadeIn('slow');
                }
                break;
            case 'handhelds-btn':
                $("#handhelds-btn").addClass("active");
                if ($("#hand-helds:hidden")) {
                    $("#menu-area .menu-item:visible").fadeOut('slow');
                    $("#hand-helds").fadeIn('slow');
                }
                break;
            case 'entrees-btn':
                $("#entrees-btn").addClass("active");
                if ($("#entrees:hidden")) {
                    $("#menu-area .menu-item:visible").fadeOut('slow');
                    $("#entrees").fadeIn('slow');
                }
                break;
        }
    });
});