export const calculatePrice = (price: number, monthly: boolean) => {
	if (monthly) return price.toLocaleString();
	else return (price * 10).toLocaleString();
};
