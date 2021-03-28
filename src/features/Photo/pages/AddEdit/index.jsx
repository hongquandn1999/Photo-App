import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';

import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
	return (
		<div className='photo-edit'>
			<Banner title='Pick your photo of TTL 🙎🙎🙎 ' />
			<div className='photo-edit'>
				<PhotoForm
					onSubmit={(values) => console.log('Form submit: ', values)}
				/>
			</div>
		</div>
	);
}

export default AddEditPage;
