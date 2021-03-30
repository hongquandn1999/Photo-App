import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
	label: '',
};

function RandomPhotoField({ field, form, label }) {
	const { name, value, onBlur } = field;
	const { errors, touched } = form;

	const showError = errors[name] && touched[name];
	const handleImgUrlChange = (newImgUrl) => {
		form.setFieldValue(name, newImgUrl);
	};

	return (
		<FormGroup>
			{label && <Label for={name}>{label}</Label>}

			<RandomPhoto
				name={name}
				imageUrl={value}
				onImageUrlChange={handleImgUrlChange}
				onRandomButtonBlur={onBlur}
				className={showError ? 'is-invalid' : ''}
				
			/>
			
			<ErrorMessage name={name} component={FormFeedback} />
		</FormGroup>
	);
}

export default RandomPhotoField;
