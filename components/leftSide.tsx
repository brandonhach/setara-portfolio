import Image from 'next/image';
import { siteConfig } from '@/config/site-config';
import { MailIcon, MapPin } from 'lucide-react';
import Footer from './footer';

const LeftSide = () => {
	return (
		<div className='flex grow-0 xl:w-2/6 w-full justify-start h-full p-10'>
			<div className='flex flex-col w-full h-full justify-start p-4 space-y-6 '>
				{/* {} */}
				<Image
					src='/image/self.jpg'
					width={120}
					height={120}
					alt='avatar'
					className='rounded-full'
					priority
					loading='eager'></Image>
				<div className='flex flex-col gap-2'>
					<div className='indicator flex xl:flex-row flex-col items-start hover:cursor-default'>
						<div className='tooltip tooltip-right' data-tip='Real-estate Finance and Management'>
							<h3 className='text-xl font-semibold underline hover:no-underline xl:mr-1'>
								{siteConfig.title}
							</h3>
						</div>
						<h3 className='text-xl font-semibold inline'> {siteConfig.school}</h3>
					</div>
					<div className='hover:cursor-default'>
						<h1 className='text-4xl font-bold pt-1'>{siteConfig.author}</h1>
						<p className='text-2xl font-light'>{siteConfig.bio}</p>
					</div>
				</div>
				<div className='flex flex-row justify-between w-full'>
					<a
						className='border border-neutral-800 py-1 px-2 rounded-md flex items-center gap-2 w-full'
						href={siteConfig.locationLink}
						target='_blank'>
						<MapPin size={16}></MapPin>
						{siteConfig.location}
					</a>
					<a
						className='border border-neutral-800 py-1 px-2 rounded-md flex items-center gap-2 w-full'
						href={`mailto:${siteConfig.email}`}>
						<MailIcon size={16}></MailIcon>
						Contact Me
					</a>
				</div>
				<div className='divider'></div>
				<div className='xl:px-0 px-8 hidden xl:flex'>
					<Footer></Footer>
				</div>
			</div>
		</div>
	);
};

export default LeftSide;
