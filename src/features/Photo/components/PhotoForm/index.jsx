import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { FastField, Form, Formik } from 'formik';
import InputField from 'customs/custom-field/InputField';
import SelectField from 'customs/custom-field/SelectField';

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


						<FormGroup>
							<Label for='categoryId'>Photo</Label>
							<div>
								<Button type='button' outline color='primary'>
									Random a Photo
								</Button>
							</div>
							<div>
								<img
									src={Images.COLORFUL_BG}
									alt='NTQT'
									width='200px'
									height='200px'
								/>
							</div>
						</FormGroup>

						<FormGroup>
							<Button color='primary'>Add to album</Button>
						</FormGroup>
					</Form>
				);
			}}
		</Formik>
	);
}

export default PhotoForm;
