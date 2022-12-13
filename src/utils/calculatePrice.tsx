export const calculatePrice = (price: number, monthly: boolean) => {
	if (monthly) return price;
	else return price * 10;
};
