module.exports = async function (input_json) {

	let {L, w, calculate_deflection, E, I_z} = input_json; //Retrieve variables from config.json input

	//Calculations
	let reaction_force = (w * L)/(2 * 1000)
	let peak_moment = (w * L**2)/(8 * 1000)

	if(calculate_deflection){ //Only run this code if the user has selected Calculate Deflection
		var peak_deflection = (5 * w * L**4)/(384 * E * I_z)
		var span_ratio = Math.round(L / peak_deflection);
		var span_ratio_string = "L/" + span_ratio
	}

	//Reporting
	ReportHelpers.print(`Reaction<br>Force`,`[math]Reaction = w*L/2 = ${reaction_force} kN[math]`, ``)
	ReportHelpers.print(`Peak<br>Moment`,`[math]M^* = \\frac{w*L^2}{8} = ${peak_moment} kNm[math]`, ``)
	ReportHelpers.print(`Peak<br>Deflection`,`[math]Deflection = \\frac{5*w*L^4}{384 * E * I_{z}} = ${peak_deflection}mm[math]`, ``)
	ReportHelpers.print(`Span<br>Ratio`,`[math]Ratio = \\frac{L}{${span_ratio}}[math]`, ``)

	ReportHelpers.drawGraph({
		loads_array: [0.3, 0.3, 0.3, [0.3, -0.3], -0.3, -0.3],
		member_length: L,
		loads_unit: "kN", 
		result_label_z: "SFD",
		result_label_y: "SFD",
		result_label_x: "Beam Length", // Optional 
		graph_title: "Shear Force Diagram",
		color: "red",
		flip_axis: false // Optional to reverse the axis 
	});

	var output = {
		'report': REPORT,
		'results': {
			'reactions_heading': {
				'label': 'Reactions and Member Forces',
				'units': 'heading',
			},
			'Reaction': {
				'label': 'Reaction Force',
				'value': reaction_force,
				'units': 'kN'
			},
			'Peak_Moment': {
				'label': 'Peak Moment',
				'value': peak_moment,
				'units': 'kNm'
			}
		}
	};

	if (calculate_deflection) {
		output.results['Deflection_Heading'] = {
			'label': 'Deflection',
			'units': 'heading',
		};
		output.results['Peak_Deflection'] = {
			'label': 'Peak Deflection',
			'value': peak_deflection,
			'units': 'mm'
		};
		output.results['Span_Ratio'] = {
			'label': 'Span Ratio',
			'value': span_ratio_string,
			'units': ''
		};
	}

	return output;
};