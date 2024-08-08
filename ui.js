var creator = SVGCreator;
let input = SKYCIV_DESIGN.designConfig.getInput();

let units = {
    F: 'kN',
    L: 'mm',
    M: 'kN/m'
};

if (SKYCIV_DESIGN.units.getCurrentUnitSystem() == 'imperial') {
    units.F = 'kip';
    units.L = 'in';
    units.M = 'kip/ft';
}

// Define graphic window size
let total_width = jQuery('#ui-div').width();
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


if (input.DL_mag == 0) {
    
} else {
    // Draw Beam (UDL)
    creator.addRect({
        x: 0.1 * total_width,
        y: 0.5 * total_height,
        width: 0.8 * total_width,
        height: 0.1 * total_height,
        stroke: 'green',
        fill_color: 'green',
        fill_opacity: '50%'
    });

    creator.addText({
        x: 0.1 * total_width + (0.8 * total_width) / 2,
        y: 0.5 * total_height - total_height / 12,
        text_value: `${input.DL_mag} ${units.M}`,
        font_size: font_size,
        text_anchor: 'middle',
        fill_color: 'green'
    });
}

// Draw Point Load Dimension Line
if (input.L == 0 || input.PL_dist == 0 || input.PL_dist < 0 || input.PL_dist > input.L || input.PL_dist == input.L || input.PL_mag == 0) {
    // Empty Block
} else {
    creator.dimLineDrawer({
        x1: 0.1 * total_width,
        y1: 0.6 * total_height - total_height / 5,
        x2: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        y2: 0.6 * total_height - total_height / 5,
        pos: "start",
        color: "black",
        text: input.PL_dist,
        text_size: 0.8 * font_size,
        arrow_size: font_size / 3
});

// Draw Point Load 
if (input.L == 0 || input.PL_dist < 0 || input.PL_mag == 0) {
    // Empty Block
} else {
    //Vertical Line
    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        start_y: 0.595 * total_height,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        end_y: 0.595 * total_height - total_height / 3.5,
        stroke: 'red',
        stroke_width: '2',
    });

    //Left Diagonal Line
    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width) - total_width / 40,
        start_y: 0.595 * total_height - total_width / 40,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        end_y: 0.595 * total_height,
        stroke: 'red',
        stroke_width: '2',
    });

    //Right Diagonal Line
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
        text_value: `${input.PL_mag} ${units.F}`,
        font_size: font_size,
        text_anchor: 'middle',
        fill_color: 'red'
    });
}

// SUPPORT A
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

// SUPPORT B
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

}

// Output Diagram
creator.endSVG();
let html = creator.getSVGHtml();
let ui_div = document.getElementById('ui-div');
ui_div.innerHTML = html;