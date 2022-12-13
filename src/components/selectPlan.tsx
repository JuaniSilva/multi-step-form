import { Plan } from 'AppTypes';
import { Card } from './card';
import clsx from 'clsx';
import { calculatePrice } from '../utils/calculatePrice';

const activeClasses =
	'border border-primary-purplish-blue bg-neutral-magnolia falopa';

const plans: Plan[] = [
	{
		name: 'Arcade',
		icon: 'icon-arcade.svg',
		monthlyPrice: 9,
	},
	{
		name: 'Advanced',
		icon: 'icon-advanced.svg',
		monthlyPrice: 12,
	},
	{
		name: 'Pro',
		icon: 'icon-pro.svg',
		monthlyPrice: 15,
	},
];

interface SelectPlanProps {
	selectedPlan: Plan | null;
	monthly: boolean;
	updateSelectedPlan: (selectedPlan: Plan) => void;
	updateIsMonthly: (isMonthly: boolean) => void;
}

export const SelectPlan = ({
	selectedPlan,
	monthly,
	updateSelectedPlan,
	updateIsMonthly,
}: SelectPlanProps) => {
	return (
		<section className="flex flex-col gap-4 w-full">
			<h2>Select your plan</h2>
			<p>You have the option of monthly or yearly billing</p>
			<ul className="flex flex-col gap-2 lg:flex-row">
				{plans.map((plan) => (
					<li key={plan.name} className="lg:w-full">
						<Card
							className={clsx(
								'p-4 flex gap-4 transition-all w-full lg:flex-col lg:gap-8 hover:border-primary-purplish-blue hover:bg-neutral-magnolia cursor-pointer',
								plan.name === selectedPlan?.name
									? activeClasses
									: 'border border-neutral-light-gray'
							)}
							onClick={() => updateSelectedPlan(plan)}
						>
							<figure className="w-10 h-10">
								<img
									src={`./assets/images/${plan.icon}`}
									alt=""
								/>
							</figure>
							<div className="">
								<h3 className="leading-5">{plan.name}</h3>
								<p>
									$
									{calculatePrice(
										plan.monthlyPrice,
										monthly
									).toLocaleString()}
									/{monthly ? 'mo' : 'yr'}
								</p>

								<p
									className={clsx(
										'text-primary-marine-blue',
										monthly && 'hidden'
									)}
								>
									2 months free
								</p>
							</div>
						</Card>
					</li>
				))}
			</ul>
			<div className="bg-neutral-alabaster w-full rounded-sm mt-8 felx p-4">
				<label className="flex relative items-center cursor-pointer mx-auto w-min">
					<span
						className={clsx(
							`mr-4 font-medium`,
							monthly ? 'text-primary-marine-blue' : ''
						)}
					>
						Monthly
					</span>
					<input
						type="checkbox"
						onChange={() => updateIsMonthly(!monthly)}
						className="sr-only peer"
					/>
					<div className="w-11 h-6 peer-focus:outline-none rounded-full peer bg-primary-marine-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[80px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
					<span
						className={clsx(
							`ml-4 font-medium`,
							!monthly ? 'text-primary-marine-blue' : ''
						)}
					>
						Yearly
					</span>
				</label>
			</div>
		</section>
	);
};
