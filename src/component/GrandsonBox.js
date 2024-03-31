import React from 'react';
import { useSelector } from 'react-redux';

const GrandsonBox = () => {
	let count = useSelector((state) => state.count);

	return (
		<>
			<h1>ver3. 🙄 {count}</h1>
		</>
	);
};

export default GrandsonBox;
