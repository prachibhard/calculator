var femAnnualTotal = 1518.36;
$(document).ready(function () {
	// var $window = $(window),
	// 	$stickyEl = $(".total"),
	// 	elTop = $stickyEl.offset().top;
	//
	// $window.scroll(function () {
	// 	$stickyEl.toggleClass(‘sticky’, $window.scrollTop() > elTop);


	$(".item").on("click", function (e) {
		var item = $(this);
		var femTotal = femAnnualTotal;

		if (item.hasClass("active")) {
			item.removeClass("active");
		} else {
			item.addClass("active");
		}

		var savings = 0;

		$(".item.active").each(function () {
			var item = $(this);
			var value = parseFloat(item.data("savings"));


			savings = savings + value;
		});

		savings = (femTotal - savings).toFixed(2);

		$(".pmoney").text("$" + savings);

		$(".smoney").text("$" + (femTotal - savings).toFixed(2));

		$(".reset").on("click", function (e) {
			e.preventDefault();

			$(".item.active").click();
		});


	});
});
