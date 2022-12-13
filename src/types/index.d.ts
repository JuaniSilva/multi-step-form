declare module 'AppTypes' {
	export interface UserServiceConfiguration {
		userInfo: UserInfo;
		selectedPlan: Plan | null;
		monthly: boolean;
		addons: Addon[] | [];
	}

	export interface UserInfo {
		name: string;
		email: string;
		phone: string;
	}

	export interface Plan {
		name: string;
		icon: string;
		monthlyPrice: number;
	}

	export interface Addon {
		name: string;
		description: string;
		monthlyPrice: number;
	}
}
