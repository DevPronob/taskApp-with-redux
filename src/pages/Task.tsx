import AddModal from '@/components/modules/tasks/AddModal'
import TaskCard from '@/components/modules/tasks/TaskCard'
import { selectTask } from '@/redux/features/task/taskSlice'
import { useAppSelector } from '@/redux/hook'
import React from 'react'

function Task() {
    const tasks =useAppSelector(selectTask)
    console.log(tasks)
  return (
    <div className='mt-5'>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold'>All Tasks</h3>
        <AddModal/>
      </div>
{
    tasks.map((item) =>{
        return <TaskCard task={item}/>
    })
}        
    </div>
  )
}

export default Task