import { Addon, UserServiceConfiguration } from 'AppTypes';
import { useEffect, useState } from 'react';
import { calculatePrice } from '../utils/calculatePrice';
import { Button } from './button';

interface ServiceSummaryProps {
	userServiceConfiguration: UserServiceConfiguration;
}

export const ServiceSummary = ({
	userServiceConfiguration,
}: ServiceSummaryProps) => {
	const { monthly, addons, selectedPlan } = userServiceConfiguration;

	// for some reason needed to do this work arround bc typescript was crying and bug is not fixed apparently
	const totalPrice = (addons as any[]).reduce((acc: number, addon) => {
		return acc + Number(calculatePrice(addon.monthlyPrice, monthly));
	}, Number(calculatePrice(selectedPlan?.monthlyPrice ?? 0, monthly)));

	return (
		<section className="flex flex-col gap-4 w-full">
			<h2>Finishing up</h2>
			<p>Double-check everyghing looks OK before confirming.</p>
			<ul className="flex flex-col gap-2 px-4 py-5 bg-neutral-magnolia rounded-lg">
				<li className="border-b border-neutral-light-gray pb-2">
					<div className="flex flex-col">
						<h3>
							{selectedPlan?.name} (
							{monthly ? 'Monthly' : 'Yearly'})
						</h3>
						<span className="inline-flex justify-between">
							<Button type="ghost" size="sm">
								Change
							</Button>
							<span className="text-primary-marine-blue font-bold">
								$
								{calculatePrice(
									selectedPlan?.monthlyPrice ?? 0,
									monthly
								)}
								/ {monthly ? 'mo' : 'yr'}
							</span>
						</span>
					</div>
				</li>
				{addons.map((addon) => (
					<li className="inline-flex justify-between">
						<p>{addon.name}</p>
						<span className="text-primary-marine-blue">
							${calculatePrice(addon.monthlyPrice, monthly)}/
							{monthly ? 'mo' : 'yr'}
						</span>
					</li>
				))}
			</ul>
			<span className="flex justify-between px-4">
				<p>Total (per {monthly ? 'month' : 'year'}) </p>
				<span>
					${calculatePrice(totalPrice, monthly)}/
					{monthly ? 'mo' : 'yr'}
				</span>
			</span>
		</section>
	);
};
