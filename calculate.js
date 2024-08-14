module.exports = async function (input_json) {

	let {height, width, flange_width, web_width, vertical_axis_name, horizontal_axis_name} = input_json; //Retrieve variables from config.json input

	//Calculations


	//Reporting
	// ReportHelpers.print(`Reference`,`[math]Input^2 = ${input_squared} mm^2[math]`, ``)

	var output = {
		'report': REPORT,
		'results': {
			'results_heading': {
				'label': 'Results',
				'units': 'heading',
			}
			// 'output_name_1': {
			// 	'label': 'Input',
			// 	'value': first_input,
			// 	'units': 'mm'
			// },
			// 'output_name_2': {
			// 	'label': 'Input<sup>2</sup>',
			// 	'value': input_squared,
			// 	'units': 'mm2'
			// },
		}
	};

	return output;
};