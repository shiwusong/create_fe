import React, { useEffect } from 'react';
import axios from 'axios';
export default () => {
	useEffect(() => {
		(async () => {
			await axios.get('/api');
		})();
	}, []);
	return <div>这是demo页</div>;
};
