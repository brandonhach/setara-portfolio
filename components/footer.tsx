import { Sun, Moon } from 'lucide-react';
const Footer = () => {
	return (
		<div className='border-neutral-800 text-neutral flex justify-between w-full'>
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
	);
};

export default Footer;
