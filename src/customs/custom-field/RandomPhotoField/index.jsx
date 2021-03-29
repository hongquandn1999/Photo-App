import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

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
			/>
		</FormGroup>
	);
}

export default RandomPhotoField;
