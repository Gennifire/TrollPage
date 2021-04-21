
/*   toggle menu when screen in smaller  */
$(document).ready(function () {

    $nav = $(".nav");
    $toggleCollapse = $(".toggleCollapse");

    /* click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass("collapse");
    })


/*--- carousel plugin ---*/

	$(".owl-carousel").owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		navText: [$(".owl-navigation .owl-nav-prev"), $(".owl-navigation .owl-nav-next")]
	});
});		