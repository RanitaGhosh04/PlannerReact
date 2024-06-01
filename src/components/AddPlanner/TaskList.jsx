import React, { useState } from 'react'

function TaskList({ Subject, Hours }) {
    const [initialHours, setinitialHours] = useState(parseInt(Hours))
    

    const incrementHours = () => {
        setinitialHours(initialHours+1)
    }

    const decrementHours = () => {
        setinitialHours(initialHours-1)
    }
  return (
    <div>
      <span>{Subject}</span>
      <span> - </span>
      <span>{initialHours}</span>
      <span
      onClick={incrementHours}
      >+</span>
      <span
      onClick={decrementHours}
      >-</span>
    </div>
  )
}

export default TaskList