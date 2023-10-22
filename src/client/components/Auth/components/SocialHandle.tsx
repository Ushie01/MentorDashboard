import { Button } from '@heathmont/moon-core-tw';
import React from 'react';
import Link from 'next/link';
import GoogleIcon from '../../../components/Svg/google';
import FacebookIcon from '../../../components/Svg/facebook';


const SocialHandle = () => {
	return (
		<div>
			<div className='flex items-center mt-8 w-full space-x-3'>
				<Button
					type='submit'
					className='flex justify-center w-full  rounded-xl border'>
					<GoogleIcon
						width='20'
						height='20'
					/>
					<p className='text-black font-bold'>Google</p>
				</Button>
				<Button
					type='submit'
					className='flex w-full justify-center rounded-xl border text-sm font-semibold leading-6 text-white shadow-sm '>
					<FacebookIcon
						width='20'
						height='20'
						color='blue'
					/>
					<p className='text-black font-bold'>Facebook</p>
				</Button>
			</div>
			<p className='mt-10 text-center text-sm text-gray-500'>
				Don`t have an account?
				<Link
					href='/signup'
					className='font-bold leading-6 text-blue-700'>
					{' '}
					Sign up
				</Link>
			</p>
		</div>
	);
};

export default SocialHandle;
