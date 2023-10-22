import React  from 'react';

type InputProps = {
    placeHolder: string;
    inputType: string;
	icon: React.ComponentType<{
		height: number;
		width: number;
		color: string;
		className: string;
	}>;
};

const Input: React.FC<InputProps> = ({ icon: IconComponent,  inputType, placeHolder}) => {
	return (
		<div className='flex bg-white items-center justify-center border rounded-lg'>
			{IconComponent && (
				<IconComponent
					height={35}
					width={35}
					color='gray'
					className='mx-2'
				/>
			)}
			<input
				name={inputType}
				type={inputType}
                autoComplete={inputType}
                placeholder={placeHolder}
				required
				className='h-8 w-full borderless-input'
			/>
		</div>
	);
};

export default Input;
