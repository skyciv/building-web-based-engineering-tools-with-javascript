var creator = SVGCreator;
var input = SKYCIV_DESIGN.designConfig.getInput();

var units = {
    F: 'kN',
    L: 'mm',
    M: 'kN/m'
};

if (SKYCIV_DESIGN.units.getCurrentUnitSystem() == 'imperial') {
    units.F = 'kip';
    units.L = 'in';
    units.M = 'kip/ft';
}

// Conditional Logic
if (SKYCIV_DESIGN.ui.helpers.wasInputChanged('support_a')) {
    let support_a_value = input.support_a;

    if (support_a_value == "Cantilever") {
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_b', 'Cantilever');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_b', 'Pinned');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_b', 'Roller');
        SKYCIV_DESIGN.ui.helpers.setInputValue('support_b', 'Fixed')
    } else {
        SKYCIV_DESIGN.ui.helpers.setDropdownValueEnabled('support_b', 'Cantilever');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueEnabled('support_b', 'Pinned');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueEnabled('support_b', 'Roller');

    }

    if (support_a_value == "Pinned" || (support_a_value == "Roller")) {
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_b', 'Cantilever');
    } else {
    }
}

if (SKYCIV_DESIGN.ui.helpers.wasInputChanged('support_b')) {
    let support_b_value = input.support_b;

    if (support_b_value == "Cantilever") {
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_a', 'Cantilever');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_a', 'Pinned');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_a', 'Roller');
        SKYCIV_DESIGN.ui.helpers.setInputValue('support_a', 'Fixed')
    } else {
        SKYCIV_DESIGN.ui.helpers.setDropdownValueEnabled('support_a', 'Cantilever');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueEnabled('support_a', 'Pinned');
        SKYCIV_DESIGN.ui.helpers.setDropdownValueEnabled('support_a', 'Roller');

    }

    if (support_b_value == "Pinned" || (support_b_value == "Roller")) {
        SKYCIV_DESIGN.ui.helpers.setDropdownValueDisabled('support_a', 'Cantilever');
    } else {
    }
}

// Define graphic window size
var total_width = jQuery('#ui-div').width();
var total_height = 0.6 * total_width;
var font_size = Math.round(0.06 * total_height);

// Initialise creator
creator.initialize({ total_height: total_height, total_width: total_width, center: true });

var marker_dims = [
    [0, 0],
    [4, 1.5],
    [0, 3],
];
creator.addMarker({
    marker_id: 'arrowhead',
    marker_width: '5',
    marker_height: '3',
    refX: '4.5',
    refY: '1.5',
    marker_dims: marker_dims
});

marker_dims = [
    [0, 1.5],
    [4, 0],
    [4, 3],
];
creator.addMarker({
    marker_id: 'arrowhead-start',
    marker_width: '5',
    marker_height: '3',
    refX: '0',
    refY: '1.5',
    marker_dims: marker_dims
});

// Set Scale Factors
var dL_ratio = input.PL_dist / input.L;

// Draw Beam
creator.addRect({
    x: 0.1 * total_width,
    y: 0.6 * total_height,
    width: 0.8 * total_width,
    height: 0.05 * total_height,
    stroke: 'black',
    fill_color: '#d3d3d3'
});

creator.addLine({
    start_x: 0.1 * total_width,
    start_y: 0.8 * total_height,
    end_x: 0.1 * total_width + 0.8 * total_width,
    end_y: 0.8 * total_height,
    stroke: 'black',
    stroke_width: '1.5',
    marker_end_def: 'arrowhead',
    marker_start_def: 'arrowhead-start'
});

creator.addText({
    x: 0.1 * total_width + 0.8 * total_width / 2,
    y: 0.8 * total_height,
    text_value: input.L + ' ' + units.L,
    font_size: `${font_size}px`,
    text_anchor: 'middle',
});

if (input.DL_mag == 0) {

} else {
    // Draw Beam (DL)
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
        font_size: `${1.2 * font_size}px`,
        text_anchor: 'middle',
        fill_color: 'green'
    });
}

// Draw Point Load (distance)
if (input.L == 0 || input.PL_dist == 0 || input.PL_dist < 0 || input.PL_dist > input.L || input.PL_dist == input.L || input.PL_mag == 0) {
    // Empty Block
} else {
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.6 * total_height - total_height / 5,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        end_y: 0.6 * total_height - total_height / 5,
        stroke: 'black',
        stroke_width: '1.5',
        marker_end_def: 'arrowhead',
        marker_start_def: 'arrowhead-start'
    });

    creator.addText({
        x: 0.1 * total_width + (dL_ratio * 0.8 * total_width) / 2,
        y: 0.6 * total_height - total_height / 5 - total_height / 12,
        text_value: input.PL_dist,
        font_size: `${font_size}px`,
        text_anchor: 'middle',
    });
}

// Draw Point Load 
if (input.L == 0 || input.PL_dist < 0 || input.PL_mag == 0) {
    // Empty Block
} else {
    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        start_y: 0.595 * total_height,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        end_y: 0.595 * total_height - total_height / 3.5,
        stroke: 'red',
        stroke_width: '1.5',
    });

    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width) - total_width / 40,
        start_y: 0.595 * total_height - total_width / 40,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        end_y: 0.595 * total_height,
        stroke: 'red',
        stroke_width: '1.5',
    });

    creator.addLine({
        start_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        start_y: 0.595 * total_height,
        end_x: 0.1 * total_width + (dL_ratio * 0.8 * total_width) + total_width / 40,
        end_y: 0.595 * total_height - total_width / 40,
        stroke: 'red',
        stroke_width: '1.5',
    });

    creator.addText({
        x: 0.1 * total_width + (dL_ratio * 0.8 * total_width),
        y: 0.595 * total_height - total_height / 3.5 - total_height / 12,
        text_value: `${input.PL_mag} ${units.F}`,
        font_size: `${1.2 * font_size}px`,
        text_anchor: 'middle',
        fill_color: 'red'
    });
}

// Support (Pinned)
if (input.support_a == 'Pinned') {
    // SUPPORT A

    creator.addCircle({
        center_x: 0.1 * total_width,
        center_y: 0.65 * total_height + 0.0125 * total_width,
        radius: 0.0125 * total_width,
        stroke: 'black',
        fill_color: 'black'
    });

    // left triangle
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width,
        end_x: 0.1 * total_width - 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // right triangle
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width,
        end_x: 0.1 * total_width + 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    //bottom triangle
    creator.addLine({
        start_x: 0.1 * total_width - 0.03 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.1 * total_width + 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // left
    creator.addLine({
        start_x: 0.1 * total_width - 0.03 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.1 * total_width - 0.03 * total_width - 0.025 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });

    //middle
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.1 * total_width - 0.025 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // //right
    creator.addLine({
        start_x: 0.1 * total_width + 0.03 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.1 * total_width + 0.03 * total_width - 0.025 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });
} else if (input.support_a == 'Fixed') {

    // SUPPORT A
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.75 * total_height,
        end_x: 0.1 * total_width,
        end_y: 0.5 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });
    // bottom line
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.75 * total_height,
        end_x: 0.1 * total_width - 0.025 * total_height,
        end_y: 0.75 * total_height + 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.6875 * total_height,
        end_x: 0.1 * total_width - 0.025 * total_height,
        end_y: 0.6875 * total_height + 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.625 * total_height,
        end_x: 0.1 * total_width - 0.025 * total_height,
        end_y: 0.625 * total_height + 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.5625 * total_height,
        end_x: 0.1 * total_width - 0.025 * total_height,
        end_y: 0.5625 * total_height + 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    // top line
    creator.addLine({
        start_x: 0.1 * total_width,
        start_y: 0.5 * total_height,
        end_x: 0.1 * total_width - 0.025 * total_height,
        end_y: 0.5 * total_height + 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // 	// left triangle
    // 	creator.addLine({
    // 		start_x: 0.1 * total_width,
    // 		start_y: 0.65 * total_height,
    // 		end_x: 0.1 * total_width - 0.03 * total_width,
    // 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    // 		stroke: 'black',
    // 		stroke_width: '1.5',
    // 	});

    // 	// right triangle
    // 	creator.addLine({
    // 		start_x: 0.1 * total_width,
    // 		start_y: 0.65 * total_height,
    // 		end_x: 0.1 * total_width + 0.03 * total_width,
    // 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    // 		stroke: 'black',
    // 		stroke_width: '1.5',
    // 	});

    // 	//bottom triangle
    // 	creator.addLine({
    // 		start_x: 0.1 * total_width - 0.03 * total_width,
    // 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    // 		end_x: 0.1 * total_width + 0.03 * total_width,
    // 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    // 		stroke: 'black',
    // 		stroke_width: '1.5',
    // 	});

    // 	// left
    // 	creator.addLine({
    // 		start_x: 0.1 * total_width - 0.03 * total_width,
    // 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    // 		end_x: 0.1 * total_width - 0.03 * total_width - 0.025 * total_width,
    // 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
    // 		stroke: 'black',
    // 		stroke_width: '1.5',
    // 	});

    // 	//middle
    // 	creator.addLine({
    // 		start_x: 0.1 * total_width,
    // 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    // 		end_x: 0.1 * total_width - 0.025 * total_width,
    // 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
    // 		stroke: 'black',
    // 		stroke_width: '1.5',
    // 	});

    // 	// //right
    // 	creator.addLine({
    // 		start_x: 0.1 * total_width + 0.03 * total_width,
    // 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    // 		end_x: 0.1 * total_width + 0.03 * total_width - 0.025 * total_width,
    // 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
    // 		stroke: 'black',
    // 		stroke_width: '1.5',
    // 	});
    } else if (input.support_a == 'Roller') {

    	// SUPPORT A

    	creator.addCircle({
    		center_x: 0.1 * total_width,
    		center_y: 0.65 * total_height + 0.0125 * total_width,
    		radius: 0.0125 * total_width,
    		stroke: 'black',
    		fill_color: 'black'
    	});

    	// left triangle
    	creator.addLine({
    		start_x: 0.1 * total_width,
    		start_y: 0.65 * total_height + 0.025 * total_width,
    		end_x: 0.1 * total_width - 0.03 * total_width,
    		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    		stroke: 'black',
    		stroke_width: '1.5',
    	});

    	// right triangle
    	creator.addLine({
    		start_x: 0.1 * total_width,
    		start_y: 0.65 * total_height + 0.025 * total_width,
    		end_x: 0.1 * total_width + 0.03 * total_width,
    		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    		stroke: 'black',
    		stroke_width: '1.5',
    	});

    	//bottom triangle
    	creator.addLine({
    		start_x: 0.1 * total_width - 0.03 * total_width,
    		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    		end_x: 0.1 * total_width + 0.03 * total_width,
    		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
    		stroke: 'black',
    		stroke_width: '1.5',
    	});

    	// left
    	creator.addCircle({
    		center_x: 0.1 * total_width - 0.03 * total_width,
    		center_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.0125 * total_width,
    		radius: 0.0125 * total_width,
    		stroke: 'black',
    		fill_color: 'none'
    	});

    	// middle
    	creator.addCircle({
    		center_x: 0.1 * total_width,
    		center_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.0125 * total_width,
    		radius: 0.0125 * total_width,
    		stroke: 'black',
    		fill_color: 'none'
    	});

    	// right
    	creator.addCircle({
    		center_x: 0.1 * total_width + 0.03 * total_width,
    		center_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.0125 * total_width,
    		radius: 0.0125 * total_width,
    		stroke: 'black',
    		fill_color: 'none'
    	});

} else if (input.support_a == 'Cantilever') {

    // creator.addText({
    // 	x: 0.04 * total_width,
    // 	y: 0.65 * total_height,
    // 	text_value: 'NONE',
    // 	font_size: `${font_size}px`,
    // 	text_anchor: 'middle',
    // 	transform: `rotate(-90,${0.04 * total_width},${0.65 * total_height})`,
    // });
}

// SUPPORT B
if (input.support_b == 'Pinned') {

    creator.addCircle({
        center_x: 0.9 * total_width,
        center_y: 0.65 * total_height + 0.0125 * total_width,
        radius: 0.0125 * total_width,
        stroke: 'black',
        fill_color: 'black'
    });

    // left triangle
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width,
        end_x: 0.9 * total_width - 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // right triangle
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width,
        end_x: 0.9 * total_width + 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    //bottom triangle
    creator.addLine({
        start_x: 0.9 * total_width - 0.03 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.9 * total_width + 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // left
    creator.addLine({
        start_x: 0.9 * total_width - 0.03 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.9 * total_width - 0.03 * total_width - 0.025 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });

    //middle
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.9 * total_width - 0.025 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // //right
    creator.addLine({
        start_x: 0.9 * total_width + 0.03 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.9 * total_width + 0.03 * total_width - 0.025 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });
} else if (input.support_b == 'Fixed') {

    // SUPPORT B
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.75 * total_height,
        end_x: 0.9 * total_width,
        end_y: 0.5 * total_height,
        stroke: 'black',
        stroke_width: '1.5',
    });
    // bottom line
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.75 * total_height,
        end_x: 0.9 * total_width + 0.025 * total_height,
        end_y: 0.75 * total_height - 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.6875 * total_height,
        end_x: 0.9 * total_width + 0.025 * total_height,
        end_y: 0.6875 * total_height - 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.625 * total_height,
        end_x: 0.9 * total_width + 0.025 * total_height,
        end_y: 0.625 * total_height - 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.5625 * total_height,
        end_x: 0.9 * total_width + 0.025 * total_height,
        end_y: 0.5625 * total_height - 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
    // top line
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.5 * total_height,
        end_x: 0.9 * total_width + 0.025 * total_height,
        end_y: 0.5 * total_height - 0.025 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });
}
// 	// left triangle
// 	creator.addLine({
// 		start_x: 0.9 * total_width,
// 		start_y: 0.65 * total_height,
// 		end_x: 0.9 * total_width - 0.03 * total_width,
// 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
// 		stroke: 'black',
// 		stroke_width: '1.5',
// 	});

// 	// right triangle
// 	creator.addLine({
// 		start_x: 0.9 * total_width,
// 		start_y: 0.65 * total_height,
// 		end_x: 0.9 * total_width + 0.03 * total_width,
// 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
// 		stroke: 'black',
// 		stroke_width: '1.5',
// 	});

// 	//bottom triangle
// 	creator.addLine({
// 		start_x: 0.9 * total_width - 0.03 * total_width,
// 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
// 		end_x: 0.9 * total_width + 0.03 * total_width,
// 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
// 		stroke: 'black',
// 		stroke_width: '1.5',
// 	});

// 	// left
// 	creator.addLine({
// 		start_x: 0.9 * total_width - 0.03 * total_width,
// 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
// 		end_x: 0.9 * total_width - 0.03 * total_width - 0.025 * total_width,
// 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
// 		stroke: 'black',
// 		stroke_width: '1.5',
// 	});

// 	//middle
// 	creator.addLine({
// 		start_x: 0.9 * total_width,
// 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
// 		end_x: 0.9 * total_width - 0.025 * total_width,
// 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
// 		stroke: 'black',
// 		stroke_width: '1.5',
// 	});

// 	// //right
// 	creator.addLine({
// 		start_x: 0.9 * total_width + 0.03 * total_width,
// 		start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
// 		end_x: 0.9 * total_width + 0.03 * total_width - 0.025 * total_width,
// 		end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.025 * total_height,
// 		stroke: 'black',
// 		stroke_width: '1.5',
// 	});
// }

else if (input.support_b == 'Roller') {

    creator.addCircle({
        center_x: 0.9 * total_width,
        center_y: 0.65 * total_height + 0.0125 * total_width,
        radius: 0.0125 * total_width,
        stroke: 'black',
        fill_color: 'black'
    });

    // left triangle
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width,
        end_x: 0.9 * total_width - 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // right triangle
    creator.addLine({
        start_x: 0.9 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width,
        end_x: 0.9 * total_width + 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    //bottom triangle
    creator.addLine({
        start_x: 0.9 * total_width - 0.03 * total_width,
        start_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        end_x: 0.9 * total_width + 0.03 * total_width,
        end_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width,
        stroke: 'black',
        stroke_width: '1.5',
    });

    // left
    creator.addCircle({
        center_x: 0.9 * total_width - 0.03 * total_width,
        center_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.0125 * total_width,
        radius: 0.0125 * total_width,
        stroke: 'black',
        fill_color: 'none'
    });

    // middle
    creator.addCircle({
        center_x: 0.9 * total_width,
        center_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.0125 * total_width,
        radius: 0.0125 * total_width,
        stroke: 'black',
        fill_color: 'none'
    });

    // middle
    creator.addCircle({
        center_x: 0.9 * total_width + 0.03 * total_width,
        center_y: 0.65 * total_height + 0.025 * total_width + 0.035 * total_width + 0.0125 * total_width,
        radius: 0.0125 * total_width,
        stroke: 'black',
        fill_color: 'none'
    });
} else if (input.support_b == 'Cantilever') {

    // creator.addText({
    // 	x: 0.92 * total_width,
    // 	y: 0.65 * total_height,
    // 	text_value: 'NONE',
    // 	font_size: `${font_size}px`,
    // 	text_anchor: 'middle',
    // 	transform: `rotate(-90,${0.92 * total_width},${0.65 * total_height})`,
    // });
}

// Output Diagram
creator.endSVG();
var html = creator.getSVGHtml();
var ui_div = document.getElementById('ui-div');
ui_div.innerHTML = html;