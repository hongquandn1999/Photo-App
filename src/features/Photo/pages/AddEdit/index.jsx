import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (values) => {
		console.log('Form Submit 🐹 ', values);

		const action = addPhoto(values);
		console.log('action', action);
		dispatch(action);
		history.push('/photos');
	};

	return (
		<div className='photo-edit'>
			<Banner title='Pick your photo of TTL 🙎🙎🙎 ' />
			<div className='photo-edit'>
				<PhotoForm onSubmit={handleSubmit} />
			</div>
		</div>
	);
}

export default AddEditPage;
