interface CardProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => {
	return (
		<div
			className={`${className} border border-neutral-light-gray rounded-xl`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};
