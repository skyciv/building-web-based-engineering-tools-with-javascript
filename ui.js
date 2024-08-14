var input = SKYCIV_DESIGN.designConfig.getInput(); //Retrieve input from HTML form

var units = { //Default unit system
    F: 'kN',
    L: 'mm',
    M: 'kN/m'
};

if (SKYCIV_DESIGN.units.getCurrentUnitSystem() == 'imperial') { //Convert units to imperial if selected by user
    units.F = 'kip';
    units.L = 'in';
    units.M = 'kip/ft';
}

// --- Input Tab SVG Diagram ---
function SectionDrawerExample(){
    var creator = SVGCreator; //Create SVGCreator object
    var total_width = jQuery('#input-div').width(); //Set SVG total width (Find pixel size of graphic window from HTML)
    var total_height = 0.6 * total_width; //Set SVG total height

    // Initialise creator
    creator.initialize({ total_height: total_height, total_width: total_width, center: true });

    var axis = false; //If false, don't draw axis

    if(input.show_axis){
        Object.entries(input.axis_table).forEach(([key, value]) => { //Assign axis input table values to axis object 
            axis = {
                vertical_label: "Y",
                horizontal_label: "Z",
                vertical_color: value.vertical_axis_colour,
                horizontal_color: value.horizontal_axis_colour,
                vertical_axis_label_color: value.vertical_axis_colour,
                horizontal_axis_label_color: value.horizontal_axis_colour,
                axis_size: value.axis_size
            }
        })
    }

    var section_drawer = SectionDrawer();

    svg_html = section_drawer.drawIBeam(
        'black', //Section colour
        input.width, //Section width
        input.height, //Section height
        input.flange_thickness, //Section flange thickness
        input.web_thickness, //Section web thickness
        300, //Graphic height (pixels)
        200, //Graphic width (pixels)
        `${units.L}`, //Unit system
        axis, //Axis object
        false //Section rotation
    );

    // Output Diagram
    creator.endSVG();
    var html = creator.getSVGHtml();
    var ui_div = document.getElementById('input-div');
    ui_div.innerHTML = html;
}


// --- Centre Tab ChartJS Graph ---
function ChartJSExample(){

    let labels_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //Labels shown on X axis
    let data_array = [] //Y axis plot points

    for(i = 0; i < labels_array.length; i++){ //Calculate Y axis values
        if(input.display_series == "exp"){
            data_array.push(Math.exp(labels_array[i]))
        }else{
            data_array.push(Math.log(labels_array[i]))
        }

    }

    var data = { //Chart graph object. Container for datasets
        labels: labels_array,
        datasets: [
            {
                label: `${input.data_label}`,
                data:  data_array,
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgb(54, 162, 235)'
            }
        ]
    };

    //ChartJS Options
    var chartConfiguration = {
        type: 'line', //Graph type
        data: data, //Chart graph object
        options: {
          responsive: true,
          scales: { //Axes labels
            x: {
              display: true,
              title: {
                display: true,
                text: `${input.x_label}`
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: `${input.y_label}`
              }
            }
          },
          plugins: {
            legend: { //Legend options
              position: 'bottom',
            },
            title: { //Graph title options (disabled in this case)
              display: false,
              text: 'Graph Title'
            }
          }
        }
    }

    var canvas = "<canvas id ='canvas-id'></canvas>" //Create empty HTML canvas element

    jQuery('#centre-div').empty(); //Empty graphics div
    jQuery('#centre-div').append(canvas); //Create canvas element within graphics div
    var canvas_element = document.getElementById('canvas-id').getContext('2d'); 
    new Chart(canvas_element, chartConfiguration); //Add chart to Canvas

}

SectionDrawerExample();
ChartJSExample();

