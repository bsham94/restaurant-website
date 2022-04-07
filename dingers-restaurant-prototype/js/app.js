//Changes the styling of the Navbar after you scroll down
$(function () {
    $(document).on('scroll', () => {
        var $top_bar = $(".top-bar");
        var $nav = $(".navbar-custom");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $top_bar.height());
    });
});

$(function () {
    var $top_bar = $(".top-bar");
    var $nav = $(".navbar-custom");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $top_bar.height());

});


//Adds the return to top button after scrolling
$(function () {
    $(document).on('scroll', () => {
        var $home = $("#home");
        var $returnTopButton = $(".back-to-top");
        if ($(this).scrollTop() > $home.height() / 3) {
            $returnTopButton.fadeIn("slow");
        }
        else {
            $returnTopButton.fadeOut("slow");
        }

    });
});
// Adds or removes the active link class for the Navbar
$(function () {
    $(".nav-link").on('click', (e) => {
        // remove classes from all
        $(".nav-link").removeClass("active");
        // add class to the one we clicked
        $(e.target).addClass("active");
    });
});
// $("#contactbtn").click(function () {
//     $('html,body').animate({
//         scrollTop: $("#footer").offset().top
//     }, 5000);
// });

// Menu Animations
$(function () {
    $('#covid-19-takeout-btn, #appetizers-btn, #handhelds-btn, #entrees-btn, #wine-btn').on('click', (e) => {
        $("#menus ul li").removeClass("active");
        switch (e.target.id) {
            case 'covid-19-takeout-btn':
                $("#covid-19-takeout-btn").addClass("active");
                if ($("#covid-19-takeout:hidden")) {
                    $("#menu-area .menu-item:visible").fadeOut('slow');
                    $("#covid-19-takeout").fadeIn('slow');
                }
                break;
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
                    $("#hand-helds").fadeIn();
                }
                break;
            case 'entrees-btn':
                $("#entrees-btn").addClass("active");
                if ($("#entrees:hidden")) {
                    $("#menu-area .menu-item:visible").fadeOut('slow');
                    $("#entrees").fadeIn();
                }
                break;
            case 'wine-btn':
                $("#wine-btn").addClass("active");
                if ($("#wine:hidden")) {
                    $("#menu-area .menu-item:visible").fadeOut('slow');
                    $("#wine").fadeIn();
                }
                break;
        }
    });
});


