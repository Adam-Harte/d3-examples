
var theData = [1, 2, 3];

var p = d3.select("body").selectAll("p")
    .data(theData)
    .enter()
    .append("p")
    .text("hello");
    

/* changing the text to match the data array

var theData = [1, 2, 3];

var p = d3.select("body").selectAll("p")
    .data(theData)
    .enter()
    .append("p")
    .text(function (d) { return d; });
    */

/* circle graph demonstarting using bound data to influence the circles attributes
    circleRadii = [40, 20, 10]
    
    var svgContainer = d3.select("body").append("svg")
                                        .attr("width", 600)
                                        .attr("height", 100);
    
    var circles = svgContainer.selectAll("circle")
                              .data(circleRadii)
                              .enter()
                             .append("circle")
   
   var circleAttributes = circles
                          .attr("cx", 50)
                          .attr("cy", 50)
                          .attr("r", function (d) { return d; })
                          .style("fill", function(d) {
                            var returnColor;
                            if (d === 40) { returnColor = "green";
                            } else if (d === 20) { returnColor = "purple";
                            } else if (d === 10) { returnColor = "red"; }
                            return returnColor;
                          });

                          */

/* using a parent svg as a container coordinate system to plot svg shape points
var spaceCircles = [30, 70, 110];

var svgContainer = d3.select("body").append("svg")
    .attr("width", 200)
    .attr("height", 200);

var circles = svgContainer.selectAll("circle")
    .data(spaceCircles)
    .enter()
    .append("circle");

var circleAttributes = circles
    .attr("cx", function (d) { return d; })
    .attr("cy", function (d) { return d; })
    .attr("r", 20)
    .style("fill", function (d) {
        var returnColor;
        if (d === 30) {
            returnColor = "green";
        } else if (d === 70) {
            returnColor = "purple";
        } else if (d === 110) { returnColor = "red"; }
        return returnColor;
    });

    */

    /* JSON data example to avoid hard coded data e.g. visualising data from an api call
    var jsonCircles = [
          { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
          { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
          { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];
        
        var svgContainer = d3.select("body").append("svg")
                                            .attr("width", 200)
                                            .attr("height", 200);
        
       var circles = svgContainer.selectAll("circle")
                                 .data(jsonCircles)
                                 .enter()
                                 .append("circle");
       
       var circleAttributes = circles
                              .attr("cx", function (d) { return d.x_axis; })
                              .attr("cy", function (d) { return d.y_axis; })
                              .attr("r", function (d) { return d.radius; })
                              .style("fill", function(d) { return d.color; });

*/

/* svg path example for line graphs based on data
var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                 { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                 { "x": 80,  "y": 5},  { "x": 100, "y": 60}];


var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");


var svgContainer = d3.select("body").append("svg")
                                    .attr("width", 200)
                                    .attr("height", 200);


var lineGraph = svgContainer.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");
                            */

/* example of dynamically changing corodinates container depending on data
                            var jsonRectangles = [
                                  { "x_axis": 10, "y_axis": 10, "height": 20, "width":20, "color" : "green" },
                                  { "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color" : "purple" },
                                  { "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color" : "red" }];
                                
                                var max_x = 0;
                                var max_y = 0;
                                
                                for (var i = 0; i < jsonRectangles.length; i++) {
                                 var temp_x, temp_y;
                                 var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
                                 var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;
                               
                                 if ( temp_x >= max_x ) { max_x = temp_x; }
                               
                                 if ( temp_y >= max_y ) { max_y = temp_y; }
                               }
                               
                               var svgContainer = d3.select("body").append("svg")
                                                                   .attr("width", max_x)
                                                                   .attr("height", max_y)
                               
                               var rectangles = svgContainer.selectAll("rect")
                                                            .data(jsonRectangles)
                                                            .enter()
                                                            .append("rect");
                               
                               var rectangleAttributes = rectangles
                                                         .attr("x", function (d) { return d.x_axis; })
                                                         .attr("y", function (d) { return d.y_axis; })
                                                         .attr("height", function (d) { return d.height; })
                                                         .attr("width", function (d) { return d.width; })
                                                         .style("fill", function(d) { return d.color; });

                                                         */