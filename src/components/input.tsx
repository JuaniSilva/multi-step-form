import clsx from 'clsx';
import { FormEvent } from 'react';

interface InputProps {
	label: string;
	value: string | undefined;
	placeholder?: string;
	type?: string;
	required?: boolean;
	showRequired?: boolean;
	onChange: (e: FormEvent<HTMLInputElement>) => void;
}
export const Input = ({
	label,
	value,
	type = 'text',
	placeholder = 'Enter a value',
	onChange,
	showRequired = false,
	required = true,
}: InputProps) => {
	return (
		<div className="flex flex-col font-medium">
			<span className="inline-flex justify-between">
				<label
					htmlFor={label}
					className="text-sm text-primary-marine-blue "
				>
					{label}
				</label>
				{required && showRequired && (
					<p className="text-primary-starberry-red leading-3">
						This field is required
					</p>
				)}
			</span>
			<input
				type={type}
				id={label}
				value={value}
				className={clsx(
					'border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue',
					showRequired &&
						required &&
						!value &&
						'ring-1 ring-primary-starberry-red'
				)}
				placeholder={placeholder}
				onChange={(e: FormEvent<HTMLInputElement>) => onChange(e)}
			/>
		</div>
	);
};
