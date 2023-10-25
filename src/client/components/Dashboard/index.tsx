import React from 'react';
import SideSection from './SideSection';
import Header from './Header';

const Dashboard = () => {
	return (
    <div className='flex items-center justify-center bg-gray-200 w-full h-screen'>
      <div className='w-1/5'>
      <SideSection />

      </div>
      <div className='w-4/5'>
        <Header />
      </div>
		</div>
	);
};

export default Dashboard;
