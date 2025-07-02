import { Delete } from '@/assets/Logo'
import AddUserModal from '@/components/modules/tasks/AddUserModal'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { selectUser } from '@/redux/features/task/userSlice'
import { useAppSelector } from '@/redux/hook'
import React from 'react'

function Users() {
    const users =useAppSelector(selectUser)
  return (
    <div className='mt-5'>
      <div className='flex items-center justify-between'>
        <h3>All Users</h3>
        <AddUserModal/>
      </div>
      <div className='mt-3 grid grid-cols-4 gap-3'>
        {
          users.map((user) =>{
            return   <Card className="w-full max-w-sm">
      <CardHeader>
        {/* <CardTitle>All Users</CardTitle> */}
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent className='flex justify-between'>
        <h2>{user.name}</h2>
        <Delete/>
      </CardContent>
    </Card>
          })
        }
        
      </div>
    </div>
  )
}

export default Users