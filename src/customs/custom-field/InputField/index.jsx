import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disable: PropTypes.bool,
};

InputField.defaultProps = {
	type: 'text',
	label: '',
	placeholder: '',
	disable: false,
};

function InputField({ field, form, type, label, placeholder, disable }) {
	const { name } = field;
	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Input
				id={name}
				{...field}
				type={type}
				disabled={disable}
				placeholder={placeholder}
			/>
		</FormGroup>
	);
}

export default InputField;
