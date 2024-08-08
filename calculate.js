const template_model = {
	'dataVersion': 41,
	'job_id': '',
	'settings': {
		'displayNodes': true,
		'displayNodeLabel': true,
		'showElements': true,
		'displayElementLabel': true,
		'display_member_end_fixities': true,
		'display_rigid_links': true,
		'showPlates': true,
		'displayPlateLabel': true,
		'showPlateMesh': true,
		'showPlateMeshNodes': true,
		'displayMeshLabels': false,
		'displayLoadLabel': true,
		'factored_loads': false,
		'colour_load_groups': false,
		'equivalent_area_loads': false,
		'proportional_loads': true,
		'notional-loads-visibility': false,
		'load_labels': true,
		'displaySupportLabel': true,
		'display_nodal_masses': true,
		'showSectionLegend': true,
		'faintElements': false,
		'localAxes': false,
		'local_axes_plate_mesh': false,
		'showOriginAxes': false,
		'displayResultLabel': true,
		'displayResultUnit': false,
		'member_station_results_on_hover': false,
		'color_scale_graphs': false,
		'limit_settings_on': true,
		'limit_state_isolation': false,
		'limit_settings_option': 'yield',
		'limit_deflection_span': '250',
		'limit_building_slenderness': '300',
		'limit_custom_value': '',
		'units': {
			'length': 'mm',
			'section_length': 'mm',
			'material_strength': 'mpa',
			'density': 'kg/m3',
			'force': 'kn',
			'moment': 'kn-m',
			'pressure': 'kpa',
			'mass': 'kg',
			'temperature': 'degc',
			'translation': 'mm',
			'stress': 'mpa'
		},
		'vertical_axis': 'Y',
		'click_drag_directions': 'default',
		'member_offsets_axis': 'local',
		'bmdConvention': false,
		'smooth_diagrams': true,
		'projection-system': 'orthographic',
		'buckling_johnson': false,
		'buckling_modes': '1',
		'dynamic_modes': '10',
		'eigenvalue_analysis_method': 'lanczos',
		'dynamic_mass_control': 'lumped',
		'dynamic_frequency_vertical_cutoff': '',
		'dynamic_frequency_area_reduction_factor': '1',
		'decPlaces': 3,
		'solverTimeout': 1200,
		'linear_equation_solver': 'direct_1',
		'ignore_load_cases': false,
		'ignore_load_groups': false,
		'only_solve_user_defined_load_combinations': false,
		'envelope_alternate_method': true,
		'envelope_displacement_sum_recalculation': false,
		'auto_run_optimizer': true,
		'smooth_plate_nodal_results': true,
		'extrapolate_plate_results_from_gauss_points': true,
		'evalPoints': 30,
		'generalRestraintCode': 'RRRRRR',
		'auto-stabilize-model': false,
		'non-linear-tolerance': '1',
		'non-linear-theory': 'small',
		'non-linear-pDelta-effect': true,
		'non-linear-pdelta-effect': true,
		'non-linear-shortening-effect': false,
		'include_rigid_links_for_area_loads': false,
		'include_inner_members_for_two_way_area_loads': false,
		'thumbnail': {
			'visibility': {
				'nodes': true,
				'node_labels': true,
				'member_labels': true,
				'supports': true,
				'loads': true,
				'load_labels': true
			}
		},
		'background_color': 'default',
		'graphics_font_size': '3'
	},
	'details': {},
	'nodes': [
		null,
		{
			'0': 0,
			'1': 0,
			'2': 0
		},
		{
			'0': 800,
			'1': 0,
			'2': 0
		}
	],
	'elements': [
		null,
		{
			'0': 1,
			'1': 2,
			'2': 1,
			'3': 0,
			'4': 'FFFFFF',
			'5': 'FFFFFF',
			'type': 'normal_continuous',
			'stiffness_A_Ry': 0,
			'stiffness_A_Rz': 0,
			'stiffness_B_Ry': 0,
			'stiffness_B_Rz': 0,
			'offsetsA': '0,0,0',
			'offsetsB': '0,0,0',
			'cable_length': '',
			'tension_compression_limit': 0,
			'mirror': 'no',
			'disable_non_linear_effects': 'no'
		}
	],
	'sections': [
		null,
		{
			'name': 'My Section',
			'material_id': 1,
			'area': 100,
			'Iy': 200,
			'Iz': 300,
			'J': 400,
			'shear_area_y': null,
			'shear_area_z': null
		}
	],
	'materials': [
		null,
		{
			'elasticity_modulus': 200000,
			'density': 7850,
			'ultimate_strength': 410,
			'yield_strength': 260,
			'thermal_expansion_coefficient': 12,
			'poissons_ratio': 0.27,
			'name': 'Structural Steel',
			'id': 1,
			'class': 'steel'
		},
		{
			'elasticity_modulus': 69000,
			'density': 2700,
			'ultimate_strength': 150,
			'yield_strength': 100,
			'thermal_expansion_coefficient': 24,
			'poissons_ratio': 0.32,
			'name': 'Aluminium',
			'id': 2,
			'class': 'aluminium'
		},
		{
			'elasticity_modulus': 150000,
			'density': 3500,
			'ultimate_strength': 2705,
			'yield_strength': '',
			'thermal_expansion_coefficient': '',
			'poissons_ratio': 0.2,
			'name': 'Carbon Fibre Reinforced Plastic',
			'id': 3,
			'class': 'other'
		},
		{
			'elasticity_modulus': 17000,
			'density': 2500,
			'ultimate_strength': 3.5,
			'yield_strength': '',
			'thermal_expansion_coefficient': 10,
			'poissons_ratio': 0.2,
			'name': 'Concrete',
			'id': 4,
			'class': 'concrete'
		},
		{
			'elasticity_modulus': 30000,
			'density': 2500,
			'ultimate_strength': 5,
			'yield_strength': '',
			'thermal_expansion_coefficient': 10,
			'poissons_ratio': 0.2,
			'name': 'Concrete High Strength',
			'id': 5,
			'class': 'concrete'
		},
		{
			'elasticity_modulus': 11000,
			'density': 900,
			'ultimate_strength': 5,
			'yield_strength': 4.5,
			'thermal_expansion_coefficient': 54,
			'poissons_ratio': 0.3,
			'name': 'Oakwood',
			'id': 6,
			'class': 'wood'
		},
		{
			'elasticity_modulus': 70000,
			'density': 2500,
			'ultimate_strength': 33,
			'yield_strength': '',
			'thermal_expansion_coefficient': 9,
			'poissons_ratio': 0.24,
			'name': 'Glass',
			'id': 7,
			'class': 'other'
		}
	],
	'supports': [
		null,
		{
			'0': 1,
			'1': 'FFFFFR',
			'type': 'node',
			'nodes': 0,
			'direction_code': 'BBBBBB',
			'tx': 0,
			'ty': 0,
			'tz': 0,
			'rx': 0,
			'ry': 0,
			'rz': 0
		},
		{
			'0': 2,
			'1': 'FFFFFR',
			'type': 'node',
			'nodes': 0,
			'direction_code': 'BBBBBB',
			'tx': 0,
			'ty': 0,
			'tz': 0,
			'rx': 0,
			'ry': 0,
			'rz': 0
		}
	],
	'PL': [
		null,
		{
			'0': 0,
			'1': 0,
			'2': -1,
			'3': 0,
			'type': 'Member',
			'E': 1,
			'pos': 50,
			'LG': 'LG'
		}
	],
	'DL': [
		null,
		{
			'0': 1,
			'1': 0,
			'2': -1,
			'3': 0,
			'4': 0,
			'5': -1,
			'6': 0,
			'axes': 'global',
			'posA': 0,
			'posB': 100,
			'LG': 'LG'
		}
	],
	'pressures': [],
	'area_loads': [],
	'area_loads_DLs': [],
	'area_loads_PLs': [],
	'moments': [],
	'member_prestress_loads': [],
	'thermal_loads': [],
	'SW': {},
	'nodal_masses': {},
	'nodal_masses_conversion_map': {},
	'spectral_loads': {},
	'LC': [],
	'settlements': [],
	'plates': [],
	'meshedPlates': [],
	'groups': [
		null
	],
	'assemblies': [],
	'design_input': {},
	'load_cases': {},
	'suppress': {
		'All On': {
			'members': [],
			'plates': [],
			'supports': [],
			'moments': [],
			'distributed_loads': [],
			'point_loads': [],
			'area_loads': [],
			'pressures': [],
			'load_combinations': []
		},
		'User Defined': {
			'members': [],
			'plates': [],
			'supports': [],
			'moments': [],
			'distributed_loads': [],
			'point_loads': [],
			'area_loads': [],
			'pressures': [],
			'load_combinations': []
		},
		'current_case': 'User Defined'
	},
	'notional_loads': {},
	'gridlines_and_elevations': [],
	'section_cuts': [],
	'stats': {
		'time_on_screen': {
			'model': 9,
			'solve': 0,
			'design': 0
		}
	}
};

module.exports = async function (input_json) {

	let { L, DL_mag, PL_mag, PL_dist, support_a, support_b, calculate_deflection, E, I_z } = input_json; //unpack your variables here

	//bug with unit conversion
	if (typeof L == 'string') L = parseFloat(L);
	if (typeof PL_mag == 'string') PL_mag = parseFloat(PL_mag);
	if (typeof PL_dist == 'string') PL_dist = parseFloat(PL_dist);

	//======= MODEL PREP
	let s3d_model = JSON.parse(JSON.stringify(template_model));
	s3d_model.nodes[2][0] = L;

	if (!PL_mag && !DL_mag) return ERROR('No load applied. Please apply a load to run analysis.');

	if (DL_mag) {
		s3d_model.DL[1][2] = -1 * DL_mag * 0.001; //kNm needs to be translated to kN/mm
		s3d_model.DL[1][5] = -1 * DL_mag * 0.001;
	} else {
		s3d_model.DL = [];
	}

	if (PL_mag) {
		s3d_model.PL[1][2] = -1 * PL_mag;
		let percent_along_beam = (PL_dist / L) * 100;
		s3d_model.PL[1]['pos'] = percent_along_beam;
		logger('PL_dist ' + PL_dist);
		logger('L ' + L);
		if (PL_dist > L) return ERROR('Point Load is outside of the range of the beam! Point Load should be > 0 and < ' + L);

	} else {
		s3d_model.PL = [];
	}

	if ((support_a == 'Pinned' && support_b == 'Cantilever') || (support_a == 'Cantilever' && support_b == 'Pinned') ||
		(support_a == 'Roller' && support_b == 'Cantilever') || (support_a == 'Cantilever' && support_b == 'Roller') ||
		(support_a == 'Cantilever' && support_b == 'Cantilever')
	) {
		return ERROR('Your beam is insufficiently supported. Please add fixed support or adjust current support settings');
	}

	if (support_a == 'Cantilever') {
		s3d_model.supports[1] = null;
	} else {
		let fixity;
		if (support_a == 'Fixed') fixity = 'FFFFFF';
		if (support_a == 'Pinned') fixity = 'FFFFRR';
		if (support_a == 'Roller') fixity = 'RFFFRR';
		s3d_model.supports[1][1] = fixity;
	}

	if (support_b == 'Cantilever') {
		s3d_model.supports[2] = null;
	} else {
		let fixity;
		if (support_b == 'Fixed') fixity = 'FFFFFF';
		if (support_b == 'Pinned') fixity = 'FFFFRR';
		if (support_b == 'Roller') fixity = 'RFFFRR';
		s3d_model.supports[2][1] = fixity;
	}

	if (calculate_deflection) {

		if (!E || !I_z) return ERROR('Deflection Calculations require E and Iy inputs');

		s3d_model.sections[1].Iy = I_z;
		s3d_model.sections[1].Iz = I_z;
		s3d_model.materials[1].elasticity_modulus = E;

	}


	let solver_results = await Solver.solve(s3d_model);
	if (solver_results.status > 0) {
		logger(JSON.stringify(solver_results));
		return ERROR('Solver Issue - check user input. Make sure a load is applied');
	}
	logger('Solver run successfully.');

	REPORT.block.new('Diagram', 3);
	let html = drawDiagram(input_json);
	ReportHelpers.print('', html, '');

	REPORT.section.break();

	// ===== RESULTS ------
	let results = solver_results.load_combinations[0];

	//Reactions
	let reactions_a = results.reactions[1];
	let reactions_b = results.reactions[2];

	let R_a = '', R_b = '', M_a = '', M_b = '';
	let reactions_arr = [['Member End', 'Fixity', 'Fy (kN)', 'Mz (kNm)']];
	if (reactions_a) {
		R_a = ReportHelpers.round(reactions_a[1], 4);
		if (reactions_a[5]) M_a = ReportHelpers.round(reactions_a[5], 4);
		reactions_arr.push(['A', support_a, R_a, M_a]);
	}
	if (reactions_b) {
		R_b = ReportHelpers.round(reactions_b[1], 4);
		if (reactions_b[5]) M_b = ReportHelpers.round(reactions_b[5], 4);
		reactions_arr.push(['B', support_b, R_b, M_b]);
	}

	let options = {
		heading: 'Reactions at Supports',
		widths: ['25%', '25%', '25%'],
		text_aligns: ['center', 'center', 'center', 'center']
	};

	ReportHelpers.quickTable(reactions_arr, options);


	let bmd_z_arr = results.bmd_z[1];
	let bmd_max = ReportHelpers.round(results.member_maxs.bmd_z[1], 4);
	let bmd_min = ReportHelpers.round(results.member_mins.bmd_z[1], 4);
	let abs_max_bmd = Math.max(Math.abs(bmd_max), Math.abs(bmd_min));
	logger('BMD_Z RESULTS: ' + JSON.stringify(bmd_z_arr));
	ReportHelpers.drawGraph({
		loads_array: bmd_z_arr,
		member_length: L,
		loads_unit: 'kNm',
		result_label: 'Bending Moment Force',
		result_label_x: 'Beam Length (mm)', // Optional 
		graph_title: 'BMD',
		color: 'red',
		flip_axis: false // Optional to reverse the axis 
	});


	let sfd_y_arr = results.sfd_y[1];
	let sfd_max = ReportHelpers.round(results.member_maxs.sfd_y[1], 4);
	let sfd_min = ReportHelpers.round(results.member_mins.sfd_y[1], 4);
	let abs_max_sfd = Math.max(Math.abs(sfd_max), Math.abs(sfd_min));
	logger('SFD RESULTS: ' + JSON.stringify(sfd_y_arr));
	ReportHelpers.drawGraph({
		loads_array: sfd_y_arr,
		member_length: L,
		loads_unit: 'kN',
		result_label: 'Shear Force',
		result_label_x: 'Beam Length (mm)', // Optional 
		graph_title: 'SFD',
		color: 'green',
		flip_axis: false // Optional to reverse the axis 
	});

	if (calculate_deflection) {
		logger('Deflection values included');
		var displacement_y_arr = results.displacement_y[1];
		var displacement_max = Math.abs(results.member_maxs.displacement_y[1]);
		var displacement_min = Math.abs(results.member_mins.displacement_y[1]);
		var abs_max_displacement = Math.max(displacement_max, displacement_min);
		var span_ratio_val = results.member_maxs.displacement_span_ratio_2[1];
		var span_ratio = 'L/' + span_ratio_val;
		logger('DEFLECTION RESULTS: ' + JSON.stringify(displacement_y_arr));


		ReportHelpers.drawGraph({
			loads_array: displacement_y_arr,
			member_length: L,
			loads_unit: 'mm',
			result_label: 'Beam Deflection',
			result_label_x: 'Beam Length (mm)', // Optional 
			graph_title: 'Beam Deflection',
			color: 'black',
			flip_axis: false // Optional to reverse the axis 
		});
	}


	ReportHelpers.messageBox('Note: This is a simplified beam analysis tool, if full functionality is needed (member design, additional loads, beam section profiles etc..) please use SkyCiv Beam or SkyCiv Structural 3D for frame analysis.', 'Advanced Analysis');

	var output = {
		'report': REPORT,
		'results': {
			'reactions_heading': {
				'label': 'Reactions and Member Forces',
				'units': 'heading',
			},
			'R_a': {
				'label': 'Fy A',
				'symbol': 'R<sub>a</sub>',
				'value': R_a,
				'units': 'kN'
			},
			'M_a': {
				'label': 'Mz A',
				'symbol': 'M<sub>a</sub>',
				'value': M_a,
				'units': 'kNm'
			},
			'R_b': {
				'label': 'Fy B',
				'symbol': 'R<sub>b</sub>',
				'value': R_b,
				'units': 'kN'
			},
			'M_b': {
				'label': 'Mz B',
				'symbol': 'M<sub>b</sub>',
				'value': M_b,
				'units': 'kNm'
			},
			'M_max': {
				'label': 'Max Bending',
				'symbol': 'M<sup>*</sup>+',
				'value': bmd_max,
				'units': 'kNm'
			},
			'M_min': {
				'label': 'Min Bending',
				'symbol': 'M<sup>*</sup>-',
				'value': bmd_min,
				'units': 'kNm'
			},
			'V_max': {
				'label': 'Max Shear Force',
				'symbol': 'V<sup>*</sup>+',
				'value': sfd_max,
				'units': 'kN'
			},
			'V_in': {
				'label': 'Min Shear Force',
				'symbol': 'V<sup>*</sup>-',
				'value': sfd_min,
				'units': 'kN'
			}
		}
	};

	if (!R_a) delete output.results['R_a'];
	if (!R_b) delete output.results['R_b'];
	if (!M_a) delete output.results['M_a'];
	if (!M_b) delete output.results['M_b'];

	if (calculate_deflection) {
		output.results['Heading A'] = {
			'label': 'Deflection Results',
			'units': 'heading',
		};
		output.results['max_displacement'] = {
			'label': 'Max Displacement',
			'value': abs_max_displacement,
			'units': 'mm'
		};
		output.results['span_ratio'] = {
			'label': 'Span Ratio',
			'value': span_ratio,
			'units': ''
		};
	}

	return output;
};

const drawDiagram = (input) => {
	
	var creator = SVGCreator;
	
	var units = {
		F: 'kN',
		L: 'mm',
		M: 'kN/m'
	};
		
	// Define graphic window size
	var total_width = 400;
	var total_height = 0.6 * total_width;
	var font_size = Math.round(0.06 * total_height);
	
// Initialise creator
creator.initialize({ total_height: total_height, total_width: total_width, align: 'center' });

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
var dL_ratio = PL_dist / L;

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
    text_value: L + ' ' + units.L,
    font_size: `${font_size}px`,
    text_anchor: 'middle',
});

if (DL_mag == 0) {

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
        text_value: `${DL_mag} ${units.M}`,
        font_size: `${1.2 * font_size}px`,
        text_anchor: 'middle',
        fill_color: 'green'
    });
}

// Draw Point Load (distance)
if (L == 0 || PL_dist == 0 || PL_dist < 0 || PL_dist > L || PL_dist == L || PL_mag == 0) {
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
        text_value: PL_dist,
        font_size: `${font_size}px`,
        text_anchor: 'middle',
    });
}

// Draw Point Load 
if (L == 0 || PL_dist < 0 || PL_mag == 0) {
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
        text_value: `${PL_mag} ${units.F}`,
        font_size: `${1.2 * font_size}px`,
        text_anchor: 'middle',
        fill_color: 'red'
    });
}

// Support (Pinned)
if (support_a == 'Pinned') {
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
} else if (support_a == 'Fixed') {

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
    } else if (support_a == 'Roller') {

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

} else if (support_a == 'Cantilever') {

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
if (support_b == 'Pinned') {

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
} else if (support_b == 'Fixed') {

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

else if (support_b == 'Roller') {

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
} else if (support_b == 'Cantilever') {

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
	return html;

};