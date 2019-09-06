import React from 'react';

import slide_one from '../../resources/images/slide_one.jpg';

const Carrousel = () => {
	return (
		<div
			className="carrousel_wrapper"
			style={{
				height: '100vh',
				overflow: 'hidden',

				background: `url(${slide_one})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		/>
	);
};

export default Carrousel;
