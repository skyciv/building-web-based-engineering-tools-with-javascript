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

    if(input.show_axis){ //If true, draw axis. Assign axis inputs to axis object 
            axis = {
                vertical_label: "Y",
                horizontal_label: "Z",
                vertical_color: input.vertical_axis_colour,
                horizontal_color: input.horizontal_axis_colour,
                vertical_axis_label_color: input.vertical_axis_colour,
                horizontal_axis_label_color: input.horizontal_axis_colour,
                axis_size: input.axis_size
            }
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




SectionDrawerExample();

