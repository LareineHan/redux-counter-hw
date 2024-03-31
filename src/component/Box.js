import React from 'react';
import { useSelector } from 'react-redux';
import GrandsonBox from './GrandsonBox';

const Box = () => {
	const count = useSelector((state) => state.count);

	return (
		<>
			<h1>ver2. 🥡 {count}</h1>
			<GrandsonBox />
		</>
	);
};

export default Box;
