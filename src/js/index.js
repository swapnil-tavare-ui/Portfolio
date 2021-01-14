var textWrapper = document.getElementsByClassName('letter-animation');
for (var i = 0; i < textWrapper.length; i++) {
	textWrapper[i].innerHTML = textWrapper[i].innerHTML.replace(/(?![^<]*>)[^< ]/g, "<span class='letter'>$&</span>");
}
anime.timeline({
		loop: false
	})
	.add({
		targets: '.main-title .letter',
		scale: [0, 1],
		duration: 1500,
		elasticity: 600,
		delay: (el, i) => 40 * (i + 1)
	}).add({
		targets: '.sub-title .letter',
		rotateY: [-90, 0],
		duration: 100,
		delay: (el, i) => 10 * i
	}).add({
		targets: '.main-title,.sub-title',
		opacity: 1,
		duration: 100,
		easing: "easeOutExpo",
		delay: 100
	})
$(".main-title .letter,.tags span").on("mouseenter", function () {
	var el = $(this);
	$(this).addClass('animate__animated animate__rubberBand');
}).on("mouseleave", function () {
	$(this).removeClass('animate__animated animate__rubberBand');
});