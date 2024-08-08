let creator = SVGCreator; //Create SVGCreator object
let input = SKYCIV_DESIGN.designConfig.getInput(); //Retrieve input from HTML form

let units = { //Default unit system
    F: 'kN',
    L: 'mm',
    M: 'kN/m'
};

if (SKYCIV_DESIGN.units.getCurrentUnitSystem() == 'imperial') { //Convert units to imperial if selected by user
    units.F = 'kip';
    units.L = 'in';
    units.M = 'kip/ft';
}

// Define graphic window size
let total_width = jQuery('#ui-div').width(); //Find pixel size of graphic window from HTML
let total_height = 0.6 * total_width;
let font_size = Math.round(0.06 * total_height);

// Initialise creator
creator.initialize({ total_height: total_height, total_width: total_width, center: true });

// Set Scale Factors
let dL_ratio = input.PL_dist / input.L;

// Draw Beam
creator.addRect({
    x: 0.1 * total_width,
    y: 0.6 * total_height,
    width: 0.8 * total_width,
    height: 0.05 * total_height,
    stroke: 'black',
    fill_color: '#d3d3d3'
});

//Beam Length Dimension Line
creator.dimLineDrawer({
    x1: 0.1 * total_width,
    y1: 0.75 * total_height,
    x2: 0.9 * total_width,
    y2: 0.75 * total_height,
    pos: "start",
    color: "black",
    text: input.L + ' ' + units.L,
    text_size: 0.8 * font_size,
    arrow_size: font_size / 3
});

if (input.w != 0) { // Draw Beam (UDL)
    creator.addRect({
        x: 0.1 * total_width,
        y: 0.5 * total_height,
        width: 0.8 * total_width,
        height: 0.1 * total_height,
        stroke: 'green',
        fill_color: 'green',
        fill_opacity: '50%'
    });

    //UDL Label
    creator.addText({
        x: 0.1 * total_width + (0.8 * total_width) / 2,
        y: 0.5 * total_height - total_height / 12,
        text_value: `${input.w} ${units.M}`,
        font_size: font_size,
        text_anchor: 'middle',
        fill_color: 'green'
    });
}

if (input.P != 0) { //Draw Point Load
    creator.dimLineDrawer({ // Draw Point Load Dimension Line
        x1: 0.1 * total_width,
        y1: 0.6 * total_height - total_height / 5,
        x2: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        y2: 0.6 * total_height - total_height / 5,
        pos: "start",
        color: "black",
        text: input.PL_dist,
        text_size: 0.8 * font_size,
        arrow_size: font_size / 3
    })

    //Vertical Arrow Line
    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        start_y: 0.595 * total_height,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        end_y: 0.595 * total_height - total_height / 3.5,
        stroke: 'red',
        stroke_width: '2',
    });

    //Left Diagonal Arrow Line
    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width) - total_width / 40,
        start_y: 0.595 * total_height - total_width / 40,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        end_y: 0.595 * total_height,
        stroke: 'red',
        stroke_width: '2',
    });

    //Right Diagonal Arrow Line
    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        start_y: 0.595 * total_height,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width) + total_width / 40,
        end_y: 0.595 * total_height - total_width / 40,
        stroke: 'red',
        stroke_width: '2',
    });

    //Point Load Label
    creator.addText({
        x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        y: 0.595 * total_height - total_height / 3.5 - total_height / 12,
        text_value: `${input.P} ${units.F}`,
        font_size: font_size,
        text_anchor: 'middle',
        fill_color: 'red'
    });
}

// Draw Support A
creator.addCircle({
    center_x: 0.1 * total_width,
    center_y: 0.65 * total_height + 0.00625 * total_width,
    radius: 0.00625 * total_width,
    stroke: 'black',
    fill_color: 'black'
});

// left triangle
creator.addLine({
    start_x: 0.1 * total_width,
    start_y: 0.65 * total_height + 0.0125 * total_width,
    end_x: 0.1 * total_width - 0.0125 * total_width,
    end_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    stroke: 'black',
    stroke_width: '1.5',
});

// right triangle
creator.addLine({
    start_x: 0.1 * total_width,
    start_y: 0.65 * total_height + 0.0125 * total_width,
    end_x: 0.1 * total_width + 0.0125 * total_width,
    end_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    stroke: 'black',
    stroke_width: '1.5',
});

//bottom triangle
creator.addLine({
    start_x: 0.1 * total_width - 0.0125 * total_width,
    start_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    end_x: 0.1 * total_width + 0.0125 * total_width,
    end_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    stroke: 'black',
    stroke_width: '1.5',
});

//Draw Support B
creator.addCircle({
    center_x: 0.9 * total_width,
    center_y: 0.65 * total_height + 0.00625 * total_width,
    radius: 0.00625 * total_width,
    stroke: 'black',
    fill_color: 'black'
});

// left triangle
creator.addLine({
    start_x: 0.9 * total_width,
    start_y: 0.65 * total_height + 0.0125 * total_width,
    end_x: 0.9 * total_width - 0.0125 * total_width,
    end_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    stroke: 'black',
    stroke_width: '1.5',
});

// right triangle
creator.addLine({
    start_x: 0.9 * total_width,
    start_y: 0.65 * total_height + 0.0125 * total_width,
    end_x: 0.9 * total_width + 0.0125 * total_width,
    end_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    stroke: 'black',
    stroke_width: '1.5',
});

//bottom triangle
creator.addLine({
    start_x: 0.9 * total_width - 0.0125 * total_width,
    start_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    end_x: 0.9 * total_width + 0.0125 * total_width,
    end_y: 0.65 * total_height + 0.0125 * total_width + 0.0175 * total_width,
    stroke: 'black',
    stroke_width: '1.5',
});

//Add Label to Diagram
creator.addText({
    x: 0.5 * total_width,
    y: 0.8 * total_height,
    text_value: `LOAD DIAGRAM`,
    font_size: 0.7 * font_size,
    text_decoration: "underline",
    text_anchor: 'middle',
    fill_color: 'black'
});

// Output Diagram
creator.endSVG();
let html = creator.getSVGHtml();
let ui_div = document.getElementById('ui-div');
ui_div.innerHTML = html;