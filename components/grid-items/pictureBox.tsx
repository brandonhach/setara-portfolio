import { GridItemInterface } from '@/config/site-config';
import Image from 'next/image';

const PictureBox = ({ item }: { item: GridItemInterface }) => {
	const src = `/image/${item.image}`;
	console.log('Image src:', src);
	return (
		<div className='relative w-full h-full overflow-hidden rounded-3xl'>
			<div>
				<h1>{item.title}</h1>
			</div>
			<Image className='object-cover w-full h-full' src={src ?? ''} alt='' fill />
		</div>
	);
};

export default PictureBox;
