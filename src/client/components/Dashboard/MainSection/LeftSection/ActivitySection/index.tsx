import React from 'react'
import ActivityCard from './ActivityCard'
import TaskSummaryCard from './TaskSummary'

const ActivitySection = () => {
  return (
      <div className='flex items-start justify-between mt-6 space-x-6'>
          <ActivityCard />
      <TaskSummaryCard />
      <div className=''>

      </div>
    </div>
  )
}

export default ActivitySection
