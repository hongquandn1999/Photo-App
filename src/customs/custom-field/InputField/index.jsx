import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

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

	const { errors, touched } = form;

	const showError = errors[name] && touched[name];

	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}
			<Input
				id={name}
				{...field}
				type={type}
				disabled={disable}
				placeholder={placeholder}

				invalid={showError}
			/>
			<ErrorMessage name={name} component={FormFeedback} />
		</FormGroup>
	);
}

export default InputField;
