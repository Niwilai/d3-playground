document.addEventListener("DOMContentLoaded", function() {
  var data = [1, 25, 50, 89, 102]

  d3.select("body").selectAll("p")
      .data(data)
      .enter()
      .append("p")
      .text(function(d) { return d; });
});
