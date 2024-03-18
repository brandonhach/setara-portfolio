export type GridItemLayout = '1x1' | '1x2' | '2x1' | '2x2' | '4x4';
export type GridItemType = 'social' | 'picture';

export interface GridItemInterface {
	layout: GridItemLayout;
	type: GridItemType;
	title?: string;
	icon?: string;
	username?: string;
	description?: string;
	color?: string;
	image?: string;
	video?: string;
	link?: string;
	setBlur?: boolean;
}

const GridItems: GridItemInterface[] = [
	{
		layout: '1x1',
		type: 'picture',
	},
	{
		layout: '1x1',
		type: 'picture',
	},
	{
		layout: '2x2',
		type: 'picture',
	},
	{
		layout: '1x1',
		type: 'picture',
	},
	{
		layout: '1x1',
		type: 'picture',
	},
	{
		layout: '2x2',
		type: 'picture',
	},
	{
		layout: '1x2',
		type: 'picture',
	},

	{
		layout: '2x2',
		type: 'picture',
	},

	{
		layout: '1x2',
		type: 'picture',
	},
	{
		layout: '4x4',
		type: 'picture',
	},
	{
		layout: '2x2',
		type: 'picture',
	},
	{
		layout: '2x2',
		type: 'picture',
	},
];

export const siteConfig = {
	author: 'Setara Kong',
	title: 'REFM',
	school: 'student @ UNC Charlotte',
	bio: 'Managing properties, financing the future.',
	location: 'Charlotte, NC',
	locationLink:
		'https://www.google.com/maps?client=firefox-b-1-d&sca_esv=f405dcd2a10c30d1&output=search&q=charlotte+nc+map&source=lnms&entry=mc&utm_campaign=srp-poic&ved=1t:200715&ictx=111',
	email: 'setara email',
	items: GridItems,
} as const;
