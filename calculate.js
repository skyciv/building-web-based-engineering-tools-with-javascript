module.exports = async function (input_json) {

	let { height, width, flange_thickness, web_thickness, input_table } = input_json; //Retrieve variables from config.json input

	//Input Table Import Example
	let input_table_data = [["Numerical<br>ID", "Alphabetical<br>ID", "Custom<br>Increment", "Number<br>Input", "Text<br>Input", "Dropdown<br>Input"]];

	for (let i = 0; i < input_table.length; i++) {
		input_table_data.push([input_table[i].num_id, input_table[i].alph_id, input_table[i].custom_increment, input_table[i].number_input, input_table[i].text_input, input_table[i].dropdown_input])
	}

	let options = { //Table Options - Used to customise widths and text justification
		heading: "Input Table Data",
		text_aligns: ["center", "center", "center", "center", "center", "center"],
	};
	ReportHelpers.quickTable(input_table_data, options); //Print table to report

	//Section Properties Table Example
	const sectionProps = SectionProps; //SkyCiv has a series of pre-built functions that calculate section properties for common section shapes
	let section_properties = sectionProps.ISectionProperties(height, width, flange_thickness, web_thickness); //Create object to capture section property results for I-section

	logger(JSON.stringify(section_properties)) //The logger function allows you to print calculation values to the log (top right hand corner)

	const PP = (val, precision = 0) => { //Function used to print values to specified number of decimal places, or scientific notation. Null precision prints value as an integer.
		if(precision == "E") {
			return PrettyPrint.pretty_print.print(val, {"significant_digits": 4, "method": "engineering"});
		} else {
			return PrettyPrint.pretty_print.print(val, {"precision": precision});
		}
	}

	let property_table_data = [
		["Property", "Value"],
		["Gross Area", "[math]A_g = " + PP(section_properties.results.A) + " \\;mm^2[math]"],
		["Centroid (Z)", "[math]C_z = " + PP(section_properties.results.Cz, 2) + " \\;mm[math]"],
		["Centroid (Y)", "[math]C_y = " + PP(section_properties.results.Cy, 2) + " \\;mm[math]"],
		["Moment of Inertia (Z)", "[math]I_z = " + PP(section_properties.results.Izp, "E") + " \\;mm^4[math]"],
		["Moment of Inertia (Y)", "[math]I_y = " + PP(section_properties.results.Iyp, "E") + " \\;mm^4[math]"],
		["Radius of Gyration (Z)", "[math]r_z = " + PP(section_properties.results.rz, 1) + " \\;mm[math]"],
		["Radius of Gyration (Y)", "[math]r_y = " + PP(section_properties.results.ry, 1) + " \\;mm[math]"],
		["Elastic Section Modulus (Z.Top)", "[math]Z_{z.top} = " + PP(section_properties.results.Zzp_top, "E") + " \\;mm^3[math]"],
		["Elastic Section Modulus (Z.Btm)", "[math]Z_{z.btm} = " + PP(section_properties.results.Zzp_btm, "E") + " \\;mm^3[math]"],
		["Elastic Section Modulus (Y.Top)", "[math]Z_{y.top} = " + PP(section_properties.results.Zyp_top, "E") + " \\;mm^3[math]"],
		["Elastic Section Modulus (Y.Btm)", "[math]Z_{y.btm} = " + PP(section_properties.results.Zyp_btm, "E") + " \\;mm^3[math]"],
		["Plastic Neutral Axis (Z)", "[math]PNA_z = " + PP(section_properties.results.PNAz, 2) + " \\;mm[math]"],
		["Plastic Neutral Axis (Y)", "[math]PNA_y = " + PP(section_properties.results.PNAy, 2) + " \\;mm[math]"],
		["Plastic Section Modulus (Z)", "[math]S_z = " + PP(section_properties.results.Szp, "E") + " \\;mm^3[math]"],
		["Plastic Section Modulus (Y)", "[math]S_y = " + PP(section_properties.results.Syp, "E") + " \\;mm^3[math]"],
		["Torsion Constant", "[math]J = " + PP(section_properties.results.J, "E") + " \\;mm^4[math]"],
		["Warping Constant", "[math]I_w = " + PP(section_properties.results.Iw, "E") + " \\;mm^6[math]"],
	];
	
	// Table Options
	options = { 
			heading: "Section Properties Table Example",
			widths: ["60%", "40%"],
			text_aligns: ["left", "center"],
	};
	ReportHelpers.quickTable(property_table_data, options); //Print table to report

	// MathJax Example
	ReportHelpers.heading("MathJax Example", 2);
	let x = 2;
	let x_squared = x**2;
	let sqrt_x = x**(0.5);
	let x_div_2 = x/2;

	ReportHelpers.print('MathJax<br>Example','[math]Let \\; x = 2\\;mm[math]', '')
	ReportHelpers.print('','[math]x^2 = 4\\;mm^2[math]', '')
	ReportHelpers.print('','[math]\\sqrt{2} = 1.414\\;mm^{-1}[math]', '')
	ReportHelpers.print('','[math]\\frac{x}{2} = 1\\;mm[math]', '')

	//Draw Graph Example
	ReportHelpers.heading("Graph Example", 2);
	ReportHelpers.drawGraph({
		loads_array: [0.3, 0.3, 0.3, [0.3, -0.3], -0.3, -0.3],
		member_length: 14,
		loads_unit: "kN", 
		result_label: "Shear Force Diagram",
		result_label_x: "Column Length", // Optional 
		graph_title: "SFD",
		color: "red",
		flip_axis: false // Optional to reverse the axis 
	});

	// ChartJS Example;
	ReportHelpers.heading("ChartJS Example", 2);
	const chartWidth = 500;
	const chartHeight = 400;
	const chartConfiguration = {
		type: 'line',
		data: {
			labels: [0, 1, 2, 3, 4, 5],
			datasets: [{
				label: 'Data',
				data: [10, 20, 30, 15, 40, 30],
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				borderWidth: 1
			}]
		},
		options: {
			responsive: true,
			scales: { //Axes labels
			x: {
				display: true,
				title: {
					display: true,
					text: 'X-Axis'
				}
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Y-Axis'
				}
			}
			},
			plugins: {
				legend: { //Legend options
					position: 'top',
				},
				title: { //Graph title options (disabled in this case)
					display: false,
					text: 'Chart Title'
				}
			}
		}
	};

	let chartHTML = await ChartJS.createChart(chartWidth, chartHeight, chartConfiguration);
	ReportHelpers.print('', chartHTML, '');

	// Output Colours
	// RED: #DB2828
	// GREEN: #21BA45
	// ORANGE: #F2711C

	//Output Example
	var output = { //The output object is used to summarise the calculation results for printing in the Output tab
		'report': REPORT,
		'results': {
			'calculation_heading': {
				'label': 'Calculations',
				'units': 'heading',
			},
			'x': {
				'label': 'x',
				'value': x,
				'units': 'mm'
			},
			'x_squared': {
				'label': 'x<sup>2</sup>',
				'value': x_squared,
				'units': 'mm2'
			},
			'sqrt_x': {
				'label': '&#8730;x',
				'value': sqrt_x,
				'units': 'mm-1'
			},
			'x_div_2': {
				'label': 'x/2',
				'value': x_div_2,
				'units': 'mm'
			},
			'result_heading': {
				'label': 'Results',
				'units': 'heading',
			},
			'safe_utility_ratio': {
				'label': 'Safe Utility Ratio',
				'value': 0.75, //Used for utilisation ratios.
				"units": "utility",
			},
			'warn_utility_ratio': {
				'label': 'Warning Utility Ratio',
				'value': 0.95, //Used for utilisation ratios.
				"units": "utility",
			},
			'fail_utility_ratio': {
				'label': 'Fail Utility Ratio',
				'value': 1.1, //Used for utilisation ratios.
				"units": "utility",
			},
			'utility_boolean': {
				'label': 'Pass / Fail Utility',
				'value': 1, //Used for pass/fail results. Value of 1 represents pass, 0 represents fail
				"units": "utility_boolean"
			},
			'custom_utility': {
				'label': 'Custom Utility',
				"units": "custom_box", //Used to create custom utility outputs
				"value": "ALERT",
				"color": "#F2711C" //Assign colour of output here
			}
		}
	};

	return output;
};