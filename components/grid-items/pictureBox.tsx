import { GridItemInterface } from '@/config/site-config';
import Image from 'next/image';

const PictureBox = ({ item }: { item: GridItemInterface }) => {
	const videoSrc = `/video/${item.video}`;
	const src = `/image/${item.image}`;
	return (
		<div className='relative w-full h-full overflow-hidden rounded-3xl'>
			{item.image ? (
				<Image className='object-cover w-full h-full' src={src} alt='' fill />
			) : (
				<video
					autoPlay
					loop
					muted
					controlsList='nodownload noplaybackrate nofullscreen'
					className='z-0 object-cover w-full h-full'>
					<source src={videoSrc} type='video/mp4' />
				</video>
			)}
		</div>
	);
};

export default PictureBox;
