import React from 'react';
import Carrousel from './Carrousel.js';
import TimeUntil from './TimeUntil.js';

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carrousel />

			<div className="artist_name">
				<div className="wrapper">Ariana Grande</div>
			</div>

			<TimeUntil />
		</div>
	);
};

export default Featured;
