'use client';
import { siteConfig } from '@/config/site-config';
import GridItem from './grid-item';
import SocialBox from './grid-items/socialBox';
import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

const staggerDelay = stagger(0.02, { from: 'center' });

const RightSide = () => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (scope.current) {
			animate(
				'div',
				{
					opacity: 1,
					y: 0,
					scale: 1,
				},
				{
					type: 'spring',
					duration: 0.15,
					stiffness: 330,
					damping: 35,
					delay: staggerDelay,
				}
			);
		}
	}, [animate, scope]);

	return (
		<div className='flex flex-1 p-4 md:h-full xl:overflow-y-auto xl:max-h-screen scrollbar-hide xl:w-3/5'>
			<div ref={scope} className='scrollbar-hide grid w-full grid-cols-4 gap-10 auto-rows-[76px]'>
				{siteConfig.items.map((item, index) => {
					return (
						<GridItem key={index} size={item.layout}>
							{item.type === 'social' ? (
								<SocialBox item={item} />
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
