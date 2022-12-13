import clsx from 'clsx';

interface SidebarProps {
	currentStep: number;
	handleNextStep: (step: number) => void;
}
const steps = [
	{
		step: 1,
		title: 'Your Info',
	},
	{
		step: 2,
		title: 'Select Plan',
	},
	{
		step: 3,
		title: 'Add-ons',
	},
	{
		step: 4,
		title: 'Summary',
	},
];
export const Sidebar = ({ currentStep, handleNextStep }: SidebarProps) => {
	return (
		<aside className="bg-sidebar-image-mobile min-h-[172px] bg-cover bg-no-repeat lg:rounded-lg lg:bg-sidebar-image-desktop">
			<nav>
				<ol className="flex justify-center pt-8 gap-4 lg:flex-col lg:w-60 lg:mx-autor">
					{steps.map((step) => (
						<li
							className="flex gap-4 lg:ml-8 items-center"
							key={step.step}
						>
							<button
								className={clsx(
									'px-3 py-2 border border-white inline-flex rounded-full leading-none font-medium w-min h-min transition-colors duration-[400ms]',
									currentStep === step.step
										? 'bg-primary-light-blue text-primary-marine-blue border-primary-light-blue'
										: 'text-white'
								)}
								onClick={() => handleNextStep(step.step)}
							>
								{step.step}
							</button>
							<span className="hidden lg:inline text-white uppercase">
								<p className="font-normal">Step {step.step}</p>
								<span className="font-bold">{step.title}</span>
							</span>
						</li>
					))}
				</ol>
			</nav>
		</aside>
	);
};
