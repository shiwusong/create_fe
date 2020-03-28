import React, { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd-mobile';
import Page from '../components/page';

export default () => {
	useEffect(() => {
		(async () => {
			await axios.get('/api');
		})();
	}, []);
	return (
		<Page>
			<p>这是demo页</p>
			<Button>123</Button>
		</Page>
	);
};
