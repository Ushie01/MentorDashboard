import React from 'react'
import LeftProject from './LeftSection'
import RightSection from './RightSection'

const MainSection = () => {
  return (
      <div className='flex p-6 space-x-6'>
          <LeftProject />
          <RightSection />
    </div>
  )
}

export default MainSection
