export type GridItemLayout = '1x2' | '2x1' | '2x2' | '2x4';
export type GridItemType = 'social' | 'languages' | 'picture' | 'project';
export type LanguagesItem = {
	title: string;
	link: string;
	color?: string;
};
export type FrameworksItem = {
	title: string;
	link: string;
	color?: string;
};
export type ToolsItem = {
	title: string;
	link: string;
	color?: string;
};

export interface GridItemInterface {
	layout: GridItemLayout;
	type: GridItemType;
	title?: string;
	icon?: string;
	username?: string;
	description?: string;
	color?: string;
	buttonTitle?: string;
	buttonLink?: string;
	buttonSecondaryText?: string;
	/* Project */
	stars?: number;
	/* Languages */
	languages?: LanguagesItem[];
	frameworks?: FrameworksItem[];
	title2?: string;
	image?: string;
	video?: string;
	link?: string;
}

const GridItems: GridItemInterface[] = [
	{
		layout: '1x2',
		type: 'social',
		title: 'Resume',
		icon: 'resume',
		image: 'resume.jpg',
		link: 'https://github.com/brandonhach',
		username: '',
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Linkedin',
		icon: 'linkedin',
		username: '',
		image: 'linkedin.jpg',
		link: 'https://www.linkedin.com/in/brandon-hach/',
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Github',
		icon: 'github',
		username: '@brandonhach',
		image: 'github.jpg',
		link: 'https://github.com/brandonhach',
	},
	{
		layout: '1x2',
		type: 'social',
		title: 'Spotify',
		username: '@doob',
		icon: 'spotify',
		video: 'drake-spotify.mp4',
		link: 'https://open.spotify.com/user/1z1b1y7vu3j7ntroaf6c7ng84',
	},

	{
		layout: '2x4',
		type: 'languages',
		title: 'Languages I used.',
		title2: 'Frameworks I used.',
		image: 'jordan.jpg',
		languages: [
			{
				title: 'Python',
				link: '',
			},
			{
				title: 'JavaScript',
				link: '',
			},
			{
				title: 'TypeScript',
				link: '',
			},
			{
				title: 'Java',
				link: '',
			},
			{
				title: 'MySQL',
				link: '',
			},
			{
				title: 'MongoDB',
				link: '',
			},
			{
				title: 'HTML',
				link: '',
			},
			{
				title: 'CSS',
				link: '',
			},
		],
		frameworks: [
			{
				title: 'Flask',
				link: '',
			},
			{
				title: 'React.js',
				link: '',
			},
			{
				title: 'Next.js',
				link: '',
			},
			{
				title: 'TailwindCSS',
				link: '',
			},
			{
				title: 'Postgres',
				link: '',
			},
		],
	},
	{
		layout: '2x2',
		type: 'project',
		title: 'ForTheBoard',
		description:
			' Reddit-style community forums, customizable live chat game sessions, and accessible in one place from your web browser. ',
		link: 'https://github.com/weiraven/for-the-board',
	},
	{
		layout: '2x2',
		type: 'project',
		title: 'Cheese Ecommerce',
		icon: 'github',
		description:
			'A luxury cheese website for sellers to list their cheese for sale. And buyers can order their cheese of choice.',
		link: 'https://github.com/brandonhach/Cheeese-Ecommerce-v2',
	},
	{
		layout: '1x2',
		title: 'jordans',
		type: 'picture',
		image: 'drake.jpg',
	},
	{
		layout: '1x2',
		title: 'jordans',
		type: 'picture',
		image: 'ferrari.jpg',
	},
	{
		layout: '1x2',
		title: 'jordans',
		type: 'picture',
		image: 'rolex.png',
	},
	{
		layout: '1x2',
		title: 'jordans',
		type: 'picture',
		image: 'mclaren.jpg',
	},
	{
		title: 'ferrari',
		layout: '2x4',
		type: 'picture',
		video: 'ferrari-media.mp4',
	},
	{
		layout: '2x4',
		type: 'picture',
		image: 'blue-jordans.jpg',
	},
];
export const siteConfig = {
	creator: 'Brandon Hach',
	title: 'CS Student @ UNC Charlotte',
	bio: 'Building websites and learning new technology everyday.',
	location: 'Charlotte, NC',
	locationLink:
		'https://www.google.com/maps/place/Charlotte,+NC/@35.2027068,-81.1694775,10z/data=!3m1!4b1!4m6!3m5!1s0x88541fc4fc381a81:0x884650e6bf43d164!8m2!3d35.2270869!4d-80.8431267!16zL20vMGZzYjg?entry=ttu',
	email: 'brandonhach5@gmail.com',
	items: GridItems,
} as const;
