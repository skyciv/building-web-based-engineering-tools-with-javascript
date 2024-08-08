
module.exports = async function (input_json) {

	let { L, DL_mag, PL_mag, PL_dist, calculate_deflection, E, I_z } = input_json; //unpack your variables here



	// ===== RESULTS ------

	//!REACTIONS TABLE
	// //Reactions
	// let reactions_a = results.reactions[1];
	// let reactions_b = results.reactions[2];

	// let R_a = '', R_b = '', M_a = '', M_b = '';
	// let reactions_arr = [['Member End', 'Fixity', 'Fy (kN)', 'Mz (kNm)']];
	// if (reactions_a) {
	// 	R_a = ReportHelpers.round(reactions_a[1], 4);
	// 	if (reactions_a[5]) M_a = ReportHelpers.round(reactions_a[5], 4);
	// 	reactions_arr.push(['A', support_a, R_a, M_a]);
	// }
	// if (reactions_b) {
	// 	R_b = ReportHelpers.round(reactions_b[1], 4);
	// 	if (reactions_b[5]) M_b = ReportHelpers.round(reactions_b[5], 4);
	// 	reactions_arr.push(['B', support_b, R_b, M_b]);
	// }

	// let options = {
	// 	heading: 'Reactions at Supports',
	// 	widths: ['25%', '25%', '25%'],
	// 	text_aligns: ['center', 'center', 'center', 'center']
	// };

	// ReportHelpers.quickTable(reactions_arr, options);


	//!!BMD DIAGRAM
	// let bmd_z_arr = results.bmd_z[1];
	// let bmd_max = ReportHelpers.round(results.member_maxs.bmd_z[1], 4);
	// let bmd_min = ReportHelpers.round(results.member_mins.bmd_z[1], 4);
	// let abs_max_bmd = Math.max(Math.abs(bmd_max), Math.abs(bmd_min));
	// logger('BMD_Z RESULTS: ' + JSON.stringify(bmd_z_arr));
	// ReportHelpers.drawGraph({
	// 	loads_array: bmd_z_arr,
	// 	member_length: L,
	// 	loads_unit: 'kNm',
	// 	result_label: 'Bending Moment Force',
	// 	result_label_x: 'Beam Length (mm)', // Optional 
	// 	graph_title: 'BMD',
	// 	color: 'red',
	// 	flip_axis: false // Optional to reverse the axis 
	// });


	//!!SFD DIAGRAM
	// let sfd_y_arr = results.sfd_y[1];
	// let sfd_max = ReportHelpers.round(results.member_maxs.sfd_y[1], 4);
	// let sfd_min = ReportHelpers.round(results.member_mins.sfd_y[1], 4);
	// let abs_max_sfd = Math.max(Math.abs(sfd_max), Math.abs(sfd_min));
	// logger('SFD RESULTS: ' + JSON.stringify(sfd_y_arr));
	// ReportHelpers.drawGraph({
	// 	loads_array: sfd_y_arr,
	// 	member_length: L,
	// 	loads_unit: 'kN',
	// 	result_label: 'Shear Force',
	// 	result_label_x: 'Beam Length (mm)', // Optional 
	// 	graph_title: 'SFD',
	// 	color: 'green',
	// 	flip_axis: false // Optional to reverse the axis 
	// });

	//!!DEFLECTION DIAGRAM
	// if (calculate_deflection) {
	// 	logger('Deflection values included');
	// 	var displacement_y_arr = results.displacement_y[1];
	// 	var displacement_max = Math.abs(results.member_maxs.displacement_y[1]);
	// 	var displacement_min = Math.abs(results.member_mins.displacement_y[1]);
	// 	var abs_max_displacement = Math.max(displacement_max, displacement_min);
	// 	var span_ratio_val = results.member_maxs.displacement_span_ratio_2[1];
	// 	var span_ratio = 'L/' + span_ratio_val;
	// 	logger('DEFLECTION RESULTS: ' + JSON.stringify(displacement_y_arr));


	// 	ReportHelpers.drawGraph({
	// 		loads_array: displacement_y_arr,
	// 		member_length: L,
	// 		loads_unit: 'mm',
	// 		result_label: 'Beam Deflection',
	// 		result_label_x: 'Beam Length (mm)', // Optional 
	// 		graph_title: 'Beam Deflection',
	// 		color: 'black',
	// 		flip_axis: false // Optional to reverse the axis 
	// 	});
	// }

	var output = {
		'report': REPORT,
		'results': {
			'reactions_heading': {
				'label': 'Reactions and Member Forces',
				'units': 'heading',
			},
			// 'R_a': {
			// 	'label': 'Fy A',
			// 	'symbol': 'R<sub>a</sub>',
			// 	'value': R_a,
			// 	'units': 'kN'
			// },
			// 'M_a': {
			// 	'label': 'Mz A',
			// 	'symbol': 'M<sub>a</sub>',
			// 	'value': M_a,
			// 	'units': 'kNm'
			// },
			// 'R_b': {
			// 	'label': 'Fy B',
			// 	'symbol': 'R<sub>b</sub>',
			// 	'value': R_b,
			// 	'units': 'kN'
			// },
			// 'M_b': {
			// 	'label': 'Mz B',
			// 	'symbol': 'M<sub>b</sub>',
			// 	'value': M_b,
			// 	'units': 'kNm'
			// },
			// 'M_max': {
			// 	'label': 'Max Bending',
			// 	'symbol': 'M<sup>*</sup>+',
			// 	'value': bmd_max,
			// 	'units': 'kNm'
			// },
			// 'M_min': {
			// 	'label': 'Min Bending',
			// 	'symbol': 'M<sup>*</sup>-',
			// 	'value': bmd_min,
			// 	'units': 'kNm'
			// },
			// 'V_max': {
			// 	'label': 'Max Shear Force',
			// 	'symbol': 'V<sup>*</sup>+',
			// 	'value': sfd_max,
			// 	'units': 'kN'
			// },
			// 'V_in': {
			// 	'label': 'Min Shear Force',
			// 	'symbol': 'V<sup>*</sup>-',
			// 	'value': sfd_min,
			// 	'units': 'kN'
			// }
		}
	};

	// if (!R_a) delete output.results['R_a'];
	// if (!R_b) delete output.results['R_b'];
	// if (!M_a) delete output.results['M_a'];
	// if (!M_b) delete output.results['M_b'];

	// if (calculate_deflection) {
	// 	output.results['Heading A'] = {
	// 		'label': 'Deflection Results',
	// 		'units': 'heading',
	// 	};
	// 	output.results['max_displacement'] = {
	// 		'label': 'Max Displacement',
	// 		'value': abs_max_displacement,
	// 		'units': 'mm'
	// 	};
	// 	output.results['span_ratio'] = {
	// 		'label': 'Span Ratio',
	// 		'value': span_ratio,
	// 		'units': ''
	// 	};
	// }

	return output;
};