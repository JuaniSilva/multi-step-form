import { FormEvent, FormEventHandler } from 'react';

interface InputProps {
	label: string;
	value: string | undefined;
	placeholder?: string;
	type?: string;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
	onInput?: (e: FormEventHandler<HTMLInputElement>) => void;
}
export const Input = ({
	label,
	value,
	type = 'text',
	placeholder = 'Enter a value',
	onChange,
	onInput,
}: InputProps) => {
	return (
		<div className="flex flex-col font-medium">
			<label htmlFor={label} className="text-primary-marine-blue ">
				{label}
			</label>
			<input
				type={type}
				id={label}
				value={value}
				className="border border-neutral-light-gray rounded px-4 py-2 text-sm"
				placeholder={placeholder}
				onChange={(e: FormEvent<HTMLInputElement>) => onChange(e)}
			/>
		</div>
	);
};
