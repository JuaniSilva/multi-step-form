import clsx from 'clsx';

interface ButtonProps {
	type?: 'primary' | 'secondary' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const Button = ({
	type = 'primary',
	children,
	size = 'md',
	className,
	onClick,
}: ButtonProps) => {
	const typeClasses =
		type === 'primary'
			? 'bg-primary-purplish-blue text-white hover:opacity-70'
			: type === 'secondary'
			? 'bg-primary-marine-blue text-white hover:opacity-70'
			: 'bg-transparent text-neutral-cool-gray ';
	const sizeClasses =
		size === 'sm'
			? 'text-sm p-0'
			: size === 'lg'
			? 'text-lg px-5 py-2 font-medium'
			: 'px-5 py-2 font-medium';
	return (
		<button
			onClick={onClick}
			className={clsx(`rounded `, typeClasses, sizeClasses, className)}
		>
			{children}
		</button>
	);
};
