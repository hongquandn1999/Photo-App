import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';

PhotoForm.propTypes = {
	onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
	onSubmit: null,
};

function PhotoForm(props) {
	return (
		<Form>
			<FormGroup>
				<Label for='titleId'>Title</Label>
				<Input name='title' id='titleId' placeholder='TTKN........💟💟💟' />
			</FormGroup>

			<FormGroup>
				<Label for='categoryId'>Category</Label>
				<Select
					id='categoryId'
					name='categoryId'
					placeholder='NTNA....💕💕💕'
					options={PHOTO_CATEGORY_OPTIONS}
				/>
			</FormGroup>

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
}

export default PhotoForm;
