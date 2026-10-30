// Exercise 4.1 – EXTRA: D3 buttons that change the SVG house

// Night mode
let isNight = false;
d3.select("#btn-night").on("click", function () {
  isNight = !isNight;
  d3.select(this).classed("active", isNight);

  // sky uses a gradient, so change the <stop> colours
  d3.select("#sky-top")
    .transition()
    .duration(800)
    .attr("stop-color", isNight ? "#0b1330" : "#7ec4ea");
  d3.select("#sky-bottom")
    .transition()
    .duration(800)
    .attr("stop-color", isNight ? "#2c3e66" : "#e3f4fb");

  d3.select("#sun")
    .transition()
    .duration(800)
    .attr("fill", isNight ? "#f4f1e1" : "#f3cd6a")
    .attr("r", isNight ? 28 : 40);

  d3.select("#sun-rays")
    .transition()
    .duration(800)
    .attr("opacity", isNight ? 0 : 1);

  d3.select("#stars")
    .transition()
    .duration(800)
    .attr("opacity", isNight ? 1 : 0);
});

// Lights
let lightsOn = false;
d3.select("#btn-lights").on("click", function () {
  lightsOn = !lightsOn;
  d3.select(this).classed("active", lightsOn);
  d3.selectAll("#windows, #attic-window").attr(
    "fill",
    lightsOn ? "#ffe680" : "#9fd3f0",
  );
  d3.select("#doorway").attr("fill", lightsOn ? "#ffd27a" : "#2b2116");
});

// Open door
let doorOpen = false;
d3.select("#btn-door").on("click", function () {
  doorOpen = !doorOpen;
  d3.select(this)
    .classed("active", doorOpen)
    .text(doorOpen ? "Close door" : "Open door");

  d3.select("#door")
    .transition()
    .duration(700)
    .attr("width", doorOpen ? 10 : 50);

  d3.select("#door-handle")
    .transition()
    .duration(doorOpen ? 200 : 700)
    .attr("opacity", doorOpen ? 0 : 1);
});

// Live DOM outline
function outline(node, depth) {
  let text = "";
  for (const child of node.children) {
    const id = child.id ? `#${child.id}` : "";
    const cls = child.getAttribute("class")
      ? `.${child.getAttribute("class")}`
      : "";
    text += "  ".repeat(depth) + `<${child.tagName}${id}${cls}>\n`;
    text += outline(child, depth + 1);
  }
  return text;
}
const svgEl = document.querySelector("#house");
document.querySelector("#dom-outline").textContent =
  "<svg#house>\n" + outline(svgEl, 1);
