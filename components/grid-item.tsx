import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva('shadow-grid rounded-3xl bg-base-300 flex flex-col justify-center', {
	variants: {
		size: {
			'1x2': 'col-span-1 row-span-2 relative overflow-hidden',
			'2x1': 'col-span-2 row-span 1 px-8 py-4',
			'2x2': 'col-span-2 row-span-2 p-8',
			'2x4': 'col-span-2 row-span-4 relative overflow-hidden',
		},
	},
	defaultVariants: {
		size: '1x2',
	},
});

type GridItemProps = { children: React.ReactNode } & VariantProps<typeof variants>;

const GridItem = ({ size, children }: GridItemProps) => {
	return (
		<div
			className={cn(
				variants({
					size,
					className:
						'hover:dark:bg-neutral-800 hover:bg-neutral-50 duration-75 transition-colors ease-in-out',
				})
			)}>
			{children}
		</div>
	);
};

export default GridItem;
