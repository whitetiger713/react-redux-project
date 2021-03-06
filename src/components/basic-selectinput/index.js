import React from 'react';
import PropTypes from 'prop-types';


class SelectInput extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: '',
			value: this.props.initial || '',
		}

		this.changeValue = this.changeValue.bind(this);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.initial == '' || newProps.initial == undefined) {
			this.setState({ value: '' });
		} else {
			if (newProps.initial == 'not_valid') {
				this.setState({ value: '' });	
			} else {
				this.setState({ value: newProps.initial });
			}
		}
	}

	changeValue(e) {
		e.preventDefault();
		this.setState({ value: e.target.value });
		if (this.props.withValid == 'false') {
			this.props.changed(e.target.value);
		} else {
			if (this.validate(e.target.value)) {
				this.setState({ error: '' });
				this.props.changed(this.props.field, e.target.value);
			} else {
				this.props.changed(this.props.field, 'not_valid');
			}
		}
	}

	validate(val) {
		if (val == this.props.label) {
			this.setState({ error: '*This field required.' });
			return false;
		}
		return true;
	}

	render() {
		return ( 
			<div>
				<select className={this.props.className} onChange={this.changeValue} value={this.state.value} >
					<option>{this.props.label}</option>
					{
						this.props.data.map((opt, index) => {
							return (<option key={index} value={ opt.id }>{ opt.name }</option>);
						})
					}
				</select>
				<span className="text-danger">{ this.state.error }</span>
			</div>
		);
	}

}

SelectInput.propTypes = {
	className: PropTypes.string,
	changed: PropTypes.func,
	initial: PropTypes.string,
	withValid: PropTypes.string,
	data: PropTypes.array,
	label: PropTypes.string,
	field: PropTypes.string,
};

export default SelectInput;
