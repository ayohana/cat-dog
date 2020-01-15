$(document).ready(function() {
  $("button#cat").click(function() {
    $("li").remove();
    $("ul#cat-says").append("<li>MEOW!</li>");
    $("ul#dog-says").append("<li>Can you downward dawg?</li>");
  });
  $("button#dog").click(function() {
    $("li").remove();
    $("ul#dog-says").append("<li>WOOF!</li>");
    $("ul#cat-says").append("<li>Marjaryasana...Do the cat pose!</li>");
  });


});