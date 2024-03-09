import RightSide from '@/components/rightSide';
import LeftSide from '@/components/leftSide';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<main className='flex flex-col xl:flex-row flex-1 w-full h-full p-4'>
			{/* {Left Side} */}
			<LeftSide></LeftSide>
			{/* {Right Side} */}
			<RightSide></RightSide>
			{/* {Footer for Mobile} */}
			<div className='flex xl:hidden px-8'>
				<Footer></Footer>
			</div>
		</main>
	);
}
