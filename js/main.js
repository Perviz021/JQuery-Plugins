$(function () {
  $(".slider1").owlCarousel({
    //default 3 dene gosterir ekranda. deyise bilerik.
    items: 3,
    loop: true,
    nav: true,
  });

  $(".flip1").flip({});

  $(".flip2").flip({
    front: ".div1",
    back: ".div2",
    trigger: "hover",
  });

  //flip biten kimi alert edir
  // $("#card").on("flip:done", function () {
  //   alert("flipped");
  // });

  $(".flipAxis").click(function () {
    const self = this;
    $("#card").flip({
      axis: $(self).data("axis"),
    });
  });
});
