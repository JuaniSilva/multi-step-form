import { FormEvent } from 'react';
import { Input } from './input';
import { UserInfo } from 'AppTypes';

interface PersonalInfoProps {
	userInfo: UserInfo;
	updateUserInfo: (userInfo: UserInfo) => void;
}

export const PersonalInfo = ({
	userInfo,
	updateUserInfo,
}: PersonalInfoProps) => {
	const handlePersonalInfo = (
		event: FormEvent<HTMLInputElement>,
		key: keyof UserInfo
	) => {
		const updatedUserInfo = { ...userInfo };
		updatedUserInfo[key] = event.currentTarget.value;
		updateUserInfo(updatedUserInfo);
	};
	return (
		<section className="flex flex-col gap-4 w-full">
			<h2>Personal info</h2>
			<p>Please provide your name, email address and phone number.</p>

			<Input
				label="Name"
				placeholder="e.g. Stephen King"
				value={userInfo.name}
				onChange={(e: FormEvent<HTMLInputElement>) =>
					handlePersonalInfo(e, 'name')
				}
			/>

			<Input
				label="Email Address"
				type="email"
				placeholder="e.g. stephenking@lorem.com"
				value={userInfo.email}
				onChange={(e: FormEvent<HTMLInputElement>) =>
					handlePersonalInfo(e, 'email')
				}
			/>

			<Input
				label="Phone Number"
				placeholder="e.g. +1 234 567 890"
				value={userInfo.phone}
				onChange={(e: FormEvent<HTMLInputElement>) =>
					handlePersonalInfo(e, 'phone')
				}
			/>
		</section>
	);
};
