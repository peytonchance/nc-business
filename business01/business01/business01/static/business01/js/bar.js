function initBar(config){

config.bubble = {};

config.bubble.render = function (){
  var businesses = config.data.businesses.sort(function(a, b){
    return d3.descending(a.name, b.market_cap);
  });

  var biznames = businesses.map(function(x) { return x.name});
  var bizcaps = businesess.map(function(x) {return x.market_cap});
}

data = jsonFix.businesses;
d = data;

d = d.sort(function (a, b) {
    return (b.market_cap-a.market_cap);
});
console.log(d)

  // Get data to have numbers instead of strings
  data.forEach(function(d) {
    d.market_cap = +d.market_cap
  });

  // Figure out what the scale for the circles should be
  var MAX_RADIUS = 200
  var calcRadius = d3.scaleSqrt()
      .domain(d3.extent(data, function(d){return d.market_cap}))
      .range([0, MAX_RADIUS]);

  // Set r for each data
  data.forEach(function(d) {
    d.r = calcRadius(d.market_cap)
  });


  var diameter = 960;

  var svg = d3.select(".bubble-div").append("svg") // NOTE your code for this line should be different
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("overflow", "visible")
      .attr("class", "bubble");


  var allCircles = svg.append('g')
      .attr('class', 'allCircles')
      .attr('transform', "translate(" + diameter/2 + "," + diameter/2 + ")")

  var node = allCircles.selectAll(".node") // this class should be the same as three lines down
      .data(d3.packSiblings(data))
      .enter().append("g")
        .style("overflow", "hidden")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  var nodeLink = node.append("a")
    .attr("href", function(d){if((data.indexOf(d)+1) ==16){return "/business01/business/17";}else if((data.indexOf(d)+1) == 17){return "/business01/business/16";}else{ return "/business01/business/" + (data.indexOf(d) + 1) }});

  nodeLink.append("title")
      .text(function(d) {
      if (d.market_cap >= 1000000000){
        return d.name + " | Market Cap: " + d.market_cap/1000000000 + "B"
      } else{
        return d.name + " | Market Cap: " + d.market_cap/1000000 + "M";
      }});

  nodeLink.append("circle")
      .attr("r", function(d) { return d.r })
      .style("fill", "#007FAE")

  nodeLink.append("text")
      .attr("dy", ".1em")
      .style("text-anchor", "middle")
      .style("font-size", function(d){ if(d.market_cap >= 5000000000){ return "15px"; }else{ return "0px";}})
      .text(function(d) { return d.ticker; });

  return svg.node()

}

function getBusinessNewsFeed(){
  var newsUrl = 'https://newsapi.org/v2/everything?' +
            'sources=business-insider&' +
            'q=north-carolina&' +
            'sortBy=popularity&' +
            'apiKey=' + myNewsKey;

            $.ajax({
                    type:"GET",
                    url: newsUrl,
                    dataType:"json",
                    success: parseNewsData
        });
}

function parseNewsData(newsData){
  console.log(newsData);
  var html = "<div>";
  var html = "<h2>Recent 'Business Insider' Articles ft. North Carolina</h2>"
  var articles = newsData["articles"];

  for(var i=0, len = 10; i < len; i++){
    var tempId = articles[i]["title"];
    html += '<a target="_blank" href="' + articles[i]["url"] + '"><h4>' + articles[i]["title"] + '</h4></a>';
    html += '<p>' + articles[i]["description"] + '</p>';
  }
   html+= '</div>'
  $("#news").html(html);
}

getBusinessNewsFeed();
