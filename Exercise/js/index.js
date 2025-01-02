$(document).ready(function () {
  $("#hero").css(
    "background-image",
    "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('./images/crosstrek1.jpg')"
  );
  $(window).on("scroll", function () {
    $(".fade-left, .fade-right").each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > elementTop + 100) {
        if ($(this).hasClass("fade-left")) {
          $(this).css({
            opacity: 1,
            transform: "translateX(0)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          });
        }
        if ($(this).hasClass("fade-right")) {
          $(this).css({
            opacity: 1,
            transform: "translateX(0)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          });
        }
      }
    });
    $(".fade-in").each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > elementTop + 50) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
          transition: "opacity 1s ease, transform 1s ease",
        });
      }
    });
  });
});
