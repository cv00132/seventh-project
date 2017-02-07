$("div").addClass("accordion");
$("p").addClass("closed");

$("#sec1").on("click", function() {
//  alert("I've been clicked!");
  $("#p1").removeClass("closed").addClass("opened");
  $("#p2").removeClass("opened").addClass("closed");
  $("#p3").removeClass("opened").addClass("closed");

});

$("#sec2").on("click", function() {
//  alert("I've been clicked!");
  $("#p1").removeClass("opened").addClass("closed");
  $("#p2").removeClass("closed").addClass("opened");
  $("#p3").removeClass("opened").addClass("closed");

});

$("#sec3").on("click", function() {
//  alert("I've been clicked!");
  $("#p1").removeClass("opened").addClass("closed");
  $("#p2").removeClass("opened").addClass("closed");
  $("#p3").removeClass("closed").addClass("opened");
});
