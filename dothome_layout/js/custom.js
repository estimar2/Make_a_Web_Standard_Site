// 버튼을 클릭하면 전체 메뉴가 보이도록
$(".tit .btn").click(function (e) {
  e.preventDefault();
  // $("#cont_nav").css("display", "block");
  // $("#cont_nav").show();
  // $("#cont_nav").fadeIn();
  // $("#cont_nav").slideDown();
  // $("#cont_nav").toggle();
  // $("#cont_nav").fadeToggle();
  $("#cont_nav").slideToggle();
  $(this).toggleClass("on");
});

// banner
// 1. HTML 마크업 세팅
// 2. CSS 연동
// 3. jQuery 연동
// 4. jQuery 호출
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
});

// Tab Menu
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();

$tab_list.find("li.active > ul").show();

function tabMenu(e) {
  e.preventDefault();

  var $this = $(this);

  $this
    .next("ul")
    .show()
    .parent("li")
    .addClass("active")
    .siblings("li")
    .removeClass("active")
    .find(">ul")
    .hide();
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

// Portfolio
$(".gallery_img").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
});

$(".play").click(function () {
  $(".gallery_img").slick("slickPlay");
});

$(".pause").click(function () {
  $(".gallery_img").slick("slickPause");
});

$(".prev").click(function () {
  $(".gallery_img").slick("slickPrev");
});

$(".next").click(function () {
  $(".gallery_img").slick("slickNext");
});

// Layer POP UP
$(".layer").click(function (e) {
  e.preventDefault();

  // $("#layer").css("display", "block");
  // $("#layer").show();
  // $("#layer").fadeIn());
  $("#layer").slideDown();
});

$("#layer .close").click(function (e) {
  e.preventDefault();

  // $("#layer").css("display", "none");
  // $("$layer").hide();
  // $("#layer").fadeOut()
  $("#layer").slideUp();
});

// Window POP UP
$(".window").click(function (e) {
  e.preventDefault();

  //window.open("파일명", "팝업이름", "옵션설정");
  //옵션 : left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen

  window.open(
    "sample_popup.html",
    "popup01",
    "width=800, height=560, left=50, top=50, scrollbars=0, toolbar=0, menubar=no"
  );
});

// Light Box
$(".lightgallery").lightGallery({
  thembnail: true,
  autoplay: true,
  pause: 3000,
  progressBar: true,
});
