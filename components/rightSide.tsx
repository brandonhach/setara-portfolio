import { siteConfig } from '@/config/site-config';
import GridItem from '@/components/grid-item';
import SocialBox from '@/components/grid-items/socialBox';
import LanguageBox from '@/components/grid-items/languageBox';
import PictureBox from '@/components/grid-items/pictureBox';
import ProjectBox from '@/components/grid-items/projectBox';

const RightSide = () => {
	return (
		<div className='flex flex-1 p-4 md:h-full xl:overflow-y-auto xl:justify-end'>
			{/* {Grid Container} */}
			<div className='grid w-full grid-cols-4 xl:gap-10 gap-6 xl:py-10 py-6 xl:px-1 auto-rows-[76px] xl:w-3/4'>
				{/* {Grid Items} */}
				{siteConfig.items.map((item, index) => {
					return (
						<GridItem key={index} size={item.layout}>
							{item.type === 'social' ? (
								<SocialBox item={item} />
							) : item.type === 'languages' ? (
								<LanguageBox item={item} />
							) : item.type === 'picture' ? (
								<PictureBox item={item} />
							) : item.type === 'project' ? (
								<ProjectBox item={item} />
							) : (
								<div>Need to create new component type.</div>
							)}
						</GridItem>
					);
				})}
			</div>
		</div>
	);
};

export default RightSide;
