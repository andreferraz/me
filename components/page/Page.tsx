import React from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

type Props = {
	children: React.ReactNode;
};

const Page: React.FC<Props> = (props: Props) => {
	return (
		<div id="page">
			{/* NAVIGATION */}
			<Navigation />

			{/* PAGE CONTENT */}
			<div id="content">{props.children}</div>

			{/* FOOTER */}
			<Footer />
		</div>
	);
};

export default Page;
