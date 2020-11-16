import React from 'react';
import NextHead from 'next/head';
import { SEO } from '../utils/structures/SEO';

type Props = {
	seo: SEO;
};

const Head: React.FC<Props> = ({ seo }) => {
	return (
		<NextHead>
			{/* GOOGLE ANALYTICS */}
			{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-HZ2D4ZJMQ3" /> */}
			{/* <script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-HZ2D4ZJMQ3');
					`,
				}}
			/> */}

			{/* PAGE TITLE */}
			<title>{seo.title}</title>

			{/* METAS */}
			<meta
				name="description"
				content="Somos uma associação de pessoas comprometidas com o legado dos princípios deixados pelo Educador, Médico, Professor, Escritor e Poeta, Janusz Korcakz."
			/>
			<meta
				name="robots"
				content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
			/>
			<link rel="canonical" href="https://www.andreferraz.me" />
			<meta property="og:locale" content="pt_BR" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:url" content="https://www.andreferraz.me" />
			<meta property="og:site_name" content={seo.title} />
			<meta name="twitter:card" content="summary" />

			{/* PRE-LINKS */}
			<link rel="preconnect" href="https://fonts.gstatic.com" />

			{/* FAVICONS */}
			<link rel="shortcut icon" href="../img/favicon.ico" />

			{/* FONT IMPORT */}
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap"
				rel="stylesheet"
			/>
		</NextHead>
	);
};

export default Head;
