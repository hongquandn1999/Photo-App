import Banner from 'components/Banner';
import Images from 'constants/images';
import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

MainPage.propTypes = {};

function MainPage(props) {
	return (
		<div className='photo-main'>
			<Banner
				title='Your awesome anime Photo 😻😻😻'
				backgroundUrl={Images.BLUE_BG}
			/>

			<Container className='photo-main'>
				<Link to='/photos/add'>Add new photo</Link>
			</Container>
		</div>
	);
}

export default MainPage;
