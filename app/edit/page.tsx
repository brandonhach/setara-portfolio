import LeftSide from '@/components/leftSide';
import RightSide from '@/components/rightSide';
import Footer from '@/components/footer';
export default function Edit() {
	return (
		<main className='flex flex-col xl:flex-row flex-grow w-screen h-screen overflow-y-auto xl:overflow-hidden '>
			<div className='flex flex-col xl:flex-row p-4 w-full xl:gap-40 gap-0 pb-16'>
				<LeftSide></LeftSide>
				<RightSide></RightSide>
			</div>
			<div className='flex xl:hidden px-8'>
				<Footer></Footer>
			</div>
		</main>
	);
}
