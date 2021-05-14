/*
Full credit to user OzzyCzech on the post
https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling
*/
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
    var $backgroundimg = $(".background");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $backgroundimg.height());
	});
});
