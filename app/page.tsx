import { siteConfig } from '@/config/site-config';
import Image from 'next/image';
import { MailIcon, MapPin, Sun, Moon } from 'lucide-react';
import GridItem from '@/components/grid-item';
import SocialBox from '@/components/grid-items/socialBox';
import LanguageBox from '@/components/grid-items/languageBox';
import PictureBox from '@/components/grid-items/pictureBox';
import ProjectBox from '@/components/grid-items/projectBox';

export default function Home() {
	return (
		<main className='flex flex-1 w-full h-full gap-10'>
			{/* {Left Side} */}
			<div className='p-4 h-full'>
				<div className='flex flex-col h-full rounded-md max-w-md space-y-6'>
					{/* {Avatar} */}
					<Image
						src='/image/self.jpg'
						width={120}
						height={120}
						alt='avatar'
						className='rounded-full'
						priority
						loading='eager'></Image>
					{/* {Content Container} */}
					<div>
						{/* { Title} */}
						<div className='text-xl text-primary-content font-semibold'>{siteConfig.title}</div>
						{/* { Full Name} */}
						<h1 className='text-4xl font-bold mt-2'>{siteConfig.creator}</h1>
						{/* { Bio} */}
						<p className='text-2xl font-light text-primary-content'>{siteConfig.bio}</p>
					</div>
					{/* {Buttons Container} */}
					<div className='flex items-center gap-6 justify-between'>
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
					{/* {Footer} */}
					<div className='border-neutral-800 text-neutral flex justify-between'>
						<div>
							Built by Brandon Hach ©2024 All Rights Reserved.
							<br />
							Built with Next.js + TailwindCSS
							<br />
							<progress className='progress w-56'></progress>
						</div>
						<div>
							<label className='swap swap-rotate'>
								{/* this hidden checkbox controls the state */}
								<input type='checkbox' className='theme-controller' value='cmyk' />

								{/* sun icon */}
								<Sun className='swap-on' size={24} color='#ff8040' />
								{/* moon icon */}
								<Moon className='swap-off' size={24} color='#ffff80' />
							</label>
						</div>
					</div>
				</div>
			</div>

			{/* {Right Side} */}
			<div className='flex-1 p-4 h-full'>
				<div className='flex items-center justify-center h-full rounded-md'>
					{/* {Grid Container} */}
					<div className='w-full h-full grid grid-cols-4 auto-rows-[76px] gap-10 overflow-y-auto'>
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
			</div>
		</main>
	);
}
