import AddModal from '@/components/modules/tasks/AddModal'
import TaskCard from '@/components/modules/tasks/TaskCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { selectTask, updateFilter } from '@/redux/features/task/taskSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hook'

function Task() {
    const tasks =useAppSelector(selectTask)
    console.log(tasks)
    const dispatch =useAppDispatch()
  return (
    <div className='mt-5'>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold'>All Tasks</h3>
        <div className='flex items-center gap-3'>
          <Tabs defaultValue='all'>
                    <TabsList className='grid grid-cols-4 w-full'>
                  <TabsTrigger onClick={() =>dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
                  <TabsTrigger onClick={() =>dispatch(updateFilter('medium'))} value="medium">Medium</TabsTrigger>
                  <TabsTrigger onClick={() =>dispatch(updateFilter('high'))} value="high">High</TabsTrigger>
                  <TabsTrigger onClick={() =>dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
                </TabsList>  
                  </Tabs>    
        <AddModal/>
        </div>
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