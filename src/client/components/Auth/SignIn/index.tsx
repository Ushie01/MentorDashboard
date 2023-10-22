import React from 'react';
import { MailEnvelope, SecurityLock } from '@heathmont/moon-icons-tw';
import SocialLogin from '../components/SocialHandle';
import SideImage from '../components/SideSection';
import OrContinueWith from '../components/OrContinueWith';
import LoginButton from '../components/Button';
import Link from 'next/link';
import Input from '@/src/shared/Input';
import Checkbox from '@/src/shared/Checkbox';


const Login = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<SideImage />
			<div className='px-6 py-12 lg:w-1/2 w-full'>
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<div className='flex flex-col'>
						<h1 className='font-bold mb-2 text-xl'>Sign In to your Account</h1>
						<p className='text-gray-500'>
							Welcome back! please enter your detail
						</p>
					</div>

					<form
						className='space-y-6 mt-7'
						action='#'
						method='POST'>
						<Input
							placeHolder='Email'
							icon={MailEnvelope}
							inputType='email'
						/>
						<Input
							placeHolder='Password'
							icon={SecurityLock}
							inputType='password'
						/>
						<div>
							<div className='flex items-center justify-between'>
								<Checkbox text='Remember me' />
								<div className='text-sm'>
									<Link
										href='#'
										className='font-bold text-blue-700'>
										Forgot password?
									</Link>
								</div>
							</div>
						</div>

						<LoginButton
							text='Sign In'
							link='/'
						/>
					</form>

					<OrContinueWith text='Or sign up with' />
					<SocialLogin />
				</div>
			</div>
		</div>
	);
};

export default Login;