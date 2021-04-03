import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../../../constants/images';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';

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
