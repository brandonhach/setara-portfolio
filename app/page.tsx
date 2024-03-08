import { siteConfig } from '@/config/site-config';
import Image from 'next/image';
import { MailIcon, MapPin, Sun, Moon } from 'lucide-react';

export default function Home() {
	return (
		<main className='flex flex-1 w-full h-full gap-10'>
			{/* {Left Side} */}
			<div className='p-8 h-full'>
				<div className='flex flex-col h-full rounded-md max-w-md space-y-6'>
					{/* {Avatar} */}
					<Image
						src='/self.jpg'
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
						<p className='text-2xl font-light text-neutral-content'>{siteConfig.bio}</p>
					</div>
					{/* {Buttons Container} */}
					<div className='flex items-center gap-6 justify-between'>
						<a
							className='border border-neutral-800 py-1 px-2 rounded-md flex items-center gap-2 w-full'
							href={siteConfig.locationLink}>
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
					<div className='border-neutral-800 text-neutral-500 flex justify-between'>
						<div>Built by Brandon Hach | ©2024 All Rights Reserved.</div>
						<div>
							<label className='swap swap-rotate'>
								{/* this hidden checkbox controls the state */}
								<input type='checkbox' className='theme-controller' value='cmyk' />

								{/* sun icon */}
								<Sun className='swap-on' size={24} />
								{/* moon icon */}
								<Moon className='swap-off' size={24} />
							</label>
						</div>
					</div>
				</div>
			</div>

			{/* {Right Side} */}
			<div className='flex-1 p-6 h-full'>
				{' '}
				<div className='flex items-center justify-center h-full rounded-md bg-primary'>Right Side</div>
			</div>
		</main>
	);
}
