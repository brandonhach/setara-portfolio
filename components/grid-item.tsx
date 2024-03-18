import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';

const variants = cva('shadow-grid rounded-3xl bg-base-300 flex flex-col justify-center', {
	variants: {
		size: {
			'1x1': 'md:col-span-1 col-span-2 row-span-2 ',
			'1x2': 'md:col-span-2 col-span-full row-span-2 py-4 md:px-8 px-4',
			'2x1': 'md:col-span-1 col-span-full row-span-4',
			'2x2': 'md:col-span-2 col-span-full row-span-4 relative overflow-hidden',
			'4x4': 'md:col-span-4 col-span-full row-span-4 relative overflow-hidden',
		},
	},
	defaultVariants: {
		size: '1x2',
	},
});

type GridItemProps = { children: React.ReactNode } & VariantProps<typeof variants>;

const GridItem = ({ size, children }: GridItemProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 60, scale: 0.8 }}
			whileInView={{ scale: 1 }}
			whileHover={{ scale: 1.03 }}
			className={cn(
				variants({
					size,
					className: 'hover:bg-gradient-to-b from-transparent via-neutral-900/10 to-neutral-920/90 ',
				})
			)}>
			{children}
		</motion.div>
	);
};

export default GridItem;
