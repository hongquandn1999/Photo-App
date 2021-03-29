import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'customs/custom-field/InputField';
import RandomPhotoField from 'customs/custom-field/RandomPhotoField';
import SelectField from 'customs/custom-field/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';

PhotoForm.propTypes = {
	onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
	onSubmit: null,
};

function PhotoForm(props) {
	const initialValues = {
		title: '',
		categoryId: null
	}
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={values => console.log('Submit', values)}
		>
			{(formikProps) => {

				// do st here
				const {values, errors, touched} = formikProps;
				console.log({values, errors, touched});
				return (
					<Form>

						<FastField
							name='title'
							component={InputField}

							label='Title'
							placeholder='NTQT........💟💟💟'
						/>
						<FastField
							name='categoryId'
							component={SelectField}

							label='Category'
							placeholder='NTNA....💕💕💕'
							options={PHOTO_CATEGORY_OPTIONS}
						/>


						<FastField
							name='Photo'
							component={RandomPhotoField}

							label='Photo'
						/>

						<FormGroup>
							<Button type='submit' color='primary'>Add to album</Button>
						</FormGroup>
					</Form>
				);
			}}
		</Formik>
	);
}

export default PhotoForm;
