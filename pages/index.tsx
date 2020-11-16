import React from 'react';

// Components
import Page from '../components/page/Page';
import Head from '../components/Head';

// Utils
import { GetStaticProps } from 'next';
import { SEO } from '../utils/structures/SEO';

type Props = {
	seo: SEO;
};

const Home: React.FC<Props> = (props: Props) => {
	return (
		<Page>
			<Head seo={props.seo} />
			<h1>André Ferraz</h1>
		</Page>
	);
};

/* Get page props during build time */
export const getStaticProps: GetStaticProps = async (context) => {
	// Define page data
	const pageProps: Props = {
		seo: {
			title: 'André Ferraz - Developer',
			description:
				"Hello, I'm a full-stack developer from Brazil, and this is my website where you can find my latest projects and a bit about me ;)",
		},
	};

	return { props: pageProps };
};

export default Home;
