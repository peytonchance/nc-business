function initBar(config){

config.bubble = {};

config.bubble.render = function (){
  var businesses = config.data.businesses.sort(function(a, b){
    return d3.descending(a.name, b.market_cap);
  });

  var biznames = businesses.map(function(x) { return x.name});
  var bizcaps = businesess.map(function(x) {return x.market_cap});
}

var diameter = 960,
    format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory20c);

var bubble = d3.pack()
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("body").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

data = jsonFix.businesses;
d = data;

for (i=0; i<data.length; i++){
  d[i].market_cap = parseInt(d[i].market_cap)
  console.log(typeof d[i].market_cap)
}

var root = d3.hierarchy({businesses: classes})
    .sum(function(d) { return d.value; })
    .each(function(d) {
      if (id = d.data.id) {
        var id, i = id.lastIndexOf(".");
        d.id = id;
        d.package = id.slice(0, i);
        d.class = id.slice(i + 1);
      }
    });
  bubble(root);

  // var root = d3.hierarchy(classes(data))
  //     .sum(function(d) { return d.market_cap; })
  //     .sort(function(a, b) { return b.market_cap - a.market_cap; });
  // bubble(root);

  var node = svg.selectAll("#circlybois")
      .data(data)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.name; });

  node.append("circle")
      .attr("r", function(d) { return Math.sqrt(d.market_cap)/3000; })
      .style("fill", function(d) {
        return color(d.name);
      });

  node.append("text")
      .attr("dy", ".1em")
      .style("text-anchor", "middle")
      .text(function(d) { return d.ticker.substring(0, d.market_cap/100000); });


// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  recurse(null, root);
  return {children: classes};
}

d3.select(self.frameElement).style("height", diameter + "px");
}
