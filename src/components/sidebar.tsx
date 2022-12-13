interface SidebarProps {
	currentStep: number;
	setStep: (step: number) => void;
}
export const Sidebar = ({ currentStep, setStep }: SidebarProps) => {
	return (
		<aside className="bg-sidebar-image-mobile min-h-[172px] bg-cover bg-no-repeat">
			<nav>
				<ol className="flex justify-center pt-8 gap-4">
					{Array.from({ length: 4 }, (_, i) => i + 1).map((step) => (
						<li
							key={step}
							className={`border border-white inline-flex px-3 py-2 rounded-full leading-none font-medium transition-colors duration-[400ms] ${
								currentStep === step
									? 'bg-primary-light-blue text-primary-marine-blue border-primary-light-blue'
									: 'text-white'
							}`}
						>
							<button onClick={() => setStep(step)}>
								{step}
							</button>
						</li>
					))}
				</ol>
			</nav>
		</aside>
	);
};
