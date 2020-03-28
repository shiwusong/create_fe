import React, { useState, useCallback } from 'react';
import { TabBar } from 'antd-mobile';
import styled from 'styled-components';

const PageStyle = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
`;

const TabWrapStyle = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 50px;
`;

export default props => {
	return (
		<PageStyle transition={true} infiniteLoader={true} ptr={false}>
			{props.children}
			<TabWrapStyle>
				<TabContent />
			</TabWrapStyle>
		</PageStyle>
	);
};

const TabContent = props => {
	const [selectedTab, setSelectedTab] = useState('Life');

	/**
	 * 点击 tab 事件
	 */
	const onPress = useCallback((tabName, pathname) => {
		setSelectedTab(tabName);
		console.log('tabName', tabName);
	}, []);

	return (
		<TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="white" tabBarPosition="top">
			{tabList.map(tab => (
				<TabBar.Item
					title={tab.title}
					key={tab.title}
					icon={{ uri: tab.icon }}
					selectedIcon={{ uri: tab.selectedIcon }}
					selected={selectedTab === tab.title}
					onPress={() => onPress(tab.title)}
				/>
			))}
		</TabBar>
	);
};

const tabList = [
	{
		title: 'Life',
		icon: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg',
		selectedIcon: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg',
		badge: 1,
	},
	{
		title: 'Koubei',
		icon: 'https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg',
		selectedIcon: 'https://zos.alipayobjects.com/rmsportal/ekLecvKBnRazVLXbWOnE.svg',
		badge: 2,
	},
	{
		title: 'Friend',
		icon: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
		selectedIcon: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
		badge: 3,
	},
	{
		title: 'My',
		icon: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
		selectedIcon: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
		badge: 4,
	},
];
