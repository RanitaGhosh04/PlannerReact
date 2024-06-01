import React, { useState } from 'react'
import TaskList from './TaskList'

function AddPlanner() {

    const [myTasks, setMyTasks] = useState([])
    const [Subject, setSubject] = useState('')
    const [Hours, setHours] = useState('')

    const handleAddTask = () => {
        if (!Subject || !Hours) return; // if no value
    
        const reqObj = {
          Subject,
          Hours,
        };

        setMyTasks([...myTasks, reqObj]);

        setSubject("");
        setHours("");
    }
  return (
    <div>
      <h2>Geekster Education Planner</h2>
      <section>
        <input
          value={Subject}
          type="text"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          value={Hours}
          type="number"
          placeholder="Hours"
          onChange={(e) => setHours(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </section>

      <section>
        {myTasks.map((task, index) => (
          <TaskList key={index} Subject={task.Subject} Hours={task.Hours} />
        ))}
      </section>
    </div>
  )
}

export default AddPlanner