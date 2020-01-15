$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-says").append("<li>MEOW!</li>");
    $("ul#dog-says").append("<li>Can you downward dawg?</li>");
  });
  $("button#dog").click(function() {
    $("ul#dog-says").append("<li>WOOF!</li>");
    $("ul#cat-says").append("<li>Marjaryasana...Do the cat pose!</li>");
  });


});