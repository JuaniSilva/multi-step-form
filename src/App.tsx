import { useState } from 'react';
import { Addon, Plan, UserInfo, UserServiceConfiguration } from 'AppTypes';
import { Button } from './components/button';
import { Sidebar } from './components/sidebar';
import { PersonalInfo } from './components/personalInfo';
import { SelectPlan } from './components/selectPlan';
import { Addons } from './components/Addons';
import { ServiceSummary } from './components/serviceSummary';
import { ThankYou } from './components/thankYou';

function App() {
	const [step, setStep] = useState(1);
	const [showRequired, setShowRequiredFields] = useState(false);

	const [userServiceConfiguration, setUserServiceConfiguration] =
		useState<UserServiceConfiguration>({
			userInfo: {
				name: '',
				email: '',
				phone: '',
			},
			selectedPlan: null,
			monthly: true,
			addons: [],
		});

	const updateUserInfo = (userInfo: UserInfo) => {
		setUserServiceConfiguration({ ...userServiceConfiguration, userInfo });
	};

	const updateSelectedPlan = (plan: Plan) => {
		setUserServiceConfiguration({
			...userServiceConfiguration,
			selectedPlan: plan,
		});
	};

	const updateMonthly = () => {
		setUserServiceConfiguration((prevVal) => ({
			...userServiceConfiguration,
			monthly: !prevVal.monthly,
		}));
	};

	const updateAddons = (addon: Addon) => {
		const addons = userServiceConfiguration.addons;
		const index = addons.findIndex(
			(currentAddon) => currentAddon.name === addon.name
		);
		if (index === -1) {
			setUserServiceConfiguration({
				...userServiceConfiguration,
				addons: [...addons, addon],
			});
		} else {
			addons.splice(index, 1);
			setUserServiceConfiguration({
				...userServiceConfiguration,
				addons: [...addons],
			});
		}
	};

	const nextStep = (onGoingStep?: number) => {
		if (step === 5) return;
		if (step === 1 || (onGoingStep && onGoingStep !== 1 && step === 1)) {
			if (
				!userServiceConfiguration.userInfo.name ||
				!userServiceConfiguration.userInfo.email ||
				!userServiceConfiguration.userInfo.email.includes('@') ||
				!userServiceConfiguration.userInfo.phone
			) {
				setShowRequiredFields(true);
				return;
			}
		}
		setStep((step) => {
			if (onGoingStep) return onGoingStep;
			return step + 1;
		});
	};

	const goBack = () => {
		if (step === 1) return;
		setStep((step) => step - 1);
	};

	return (
		<main className="h-screen flex flex-col text-neutral-cool-gray w-full lg:mx-auto lg:max-w-[58.75rem] lg:mt-20 lg:flex-row grow lg:p-4 lg:rounded-lg lg:bg-white lg:h-[33.75rem] lg:shadow">
			<Sidebar currentStep={step} handleNextStep={nextStep} />
			<div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
				<form className="bg-neutral-alabaster px-6 py-9 rounded-[0.625rem] -translate-y-[4.5rem] flex w-full grow [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary-marine-blue [&_h3]:font-medium [&_h3]:text-primary-marine-blue lg:bg-transparent lg:translate-y-0 ">
					{step === 1 && (
						<PersonalInfo
							userInfo={userServiceConfiguration.userInfo}
							updateUserInfo={updateUserInfo}
							showRequired={showRequired}
						/>
					)}
					{step === 2 && (
						<SelectPlan
							selectedPlan={userServiceConfiguration.selectedPlan}
							monthly={userServiceConfiguration.monthly}
							updateSelectedPlan={updateSelectedPlan}
							updateIsMonthly={updateMonthly}
						/>
					)}
					{step === 3 && (
						<Addons
							selectedAddons={userServiceConfiguration.addons}
							monthly={userServiceConfiguration.monthly}
							updateAddons={updateAddons}
						/>
					)}
					{step === 4 && (
						<ServiceSummary
							userServiceConfiguration={userServiceConfiguration}
						/>
					)}
					{step === 5 && <ThankYou />}
				</form>
				{step < 5 && (
					<menu className="flex justify-between p-4 mt-auto">
						<li>
							<Button type="ghost" onClick={goBack}>
								Go Back
							</Button>
						</li>
						<li>
							<Button onClick={() => nextStep()}>
								{step !== 4 ? 'Next Step' : 'Confirm'}
							</Button>
						</li>
					</menu>
				)}
			</div>
		</main>
	);
}

export default App;
