import React from 'react'
import MacCircle from './MacCircle/MacCircle'
const MacCircleContainer = () => {
  return (
    <div className='w-fit h-fit flex gap-2'>
        <MacCircle color="#E45656"/>
        <MacCircle color="#E4BC56"/>
        <MacCircle color="#56E46D"/>
    </div>
  )
}

export default MacCircleContainer