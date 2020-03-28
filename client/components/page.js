import React from 'react';
import styled from 'styled-components';

const PageStyle = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
`;

export default props => {
	return (
		<PageStyle transition={true} infiniteLoader={true} ptr={false}>
			{props.children}
		</PageStyle>
	);
};
