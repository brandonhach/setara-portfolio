import { Sun, Moon } from 'lucide-react';
const Footer = () => {
	return (
		<div className='border-neutral-800 text-neutral flex justify-between xl:w-5/6'>
			<div className='hover:cursor-default'>
				Built by{' '}
				<a
					className='inline underline hover:text-base-300'
					href='https://www.linkedin.com/in/brandon-hach/'
					target='_blank'
					rel='noopener noreferrer'>
					Brandon Hach
				</a>{' '}
				©2024 All Rights Reserved.
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
	);
};

export default Footer;
