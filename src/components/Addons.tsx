import { Addon } from 'AppTypes';
import { calculatePrice } from '../utils/calculatePrice';
import { Card } from './card';
import clsx from 'clsx';

const activeClasses = 'border-primary-purplish-blue bg-neutral-magnolia';

const addons: Addon[] = [
	{
		name: 'Online service',
		description: 'Access to multiplayer games',
		monthlyPrice: 1,
	},
	{
		name: 'Large storage',
		description: 'Extra 1TB of cloud save',
		monthlyPrice: 2,
	},
	{
		name: 'Customizable profile',
		description: 'Custom theme on your profile',
		monthlyPrice: 2,
	},
];

interface AddonsProps {
	selectedAddons: Addon[];
	monthly: boolean;
	updateAddons: (addon: Addon) => void;
}

export const Addons = ({
	updateAddons,
	monthly,
	selectedAddons,
}: AddonsProps) => {
	return (
		<section className="flex flex-col w-full gap-4">
			<h2>Pick add-ons</h2>
			<p>Add-ons help enhace your gaming experience.</p>
			{addons.map((addon) => (
				<Card
					className={clsx(
						`p-4 flex gap-4 transition-all relative w-full hover:border-primary-purplish-blue hover:bg-neutral-magnolia cursor-pointer`,
						selectedAddons.includes(addon) ? activeClasses : ''
					)}
					onClick={() => updateAddons(addon)}
					key={addon.name}
				>
					<input
						type="checkbox"
						checked={selectedAddons.includes(addon)}
						className="w-5 h-5 aspect-square rounded-sm self-center checked:accent-primary-purplish-blue "
						onChange={() => updateAddons(addon)}
					/>
					<div>
						<h3>{addon.name}</h3>
						<p>{addon.description}</p>
					</div>
					<span className="w-min ml-auto self-center">
						$
						{calculatePrice(
							addon.monthlyPrice,
							monthly
						).toLocaleString()}
						{monthly ? 'mo' : 'yr'}
					</span>
				</Card>
			))}
		</section>
	);
};
