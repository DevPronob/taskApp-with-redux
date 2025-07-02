import { Trash } from "@/assets/Logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { toggleCompleted } from "@/redux/features/task/taskSlice";
import type { ITypes } from "@/types/taskTypes";
                       import { useDispatch } from "react-redux"                                                                                                                 

function TaskCard({ task }: { task: ITypes }) {

  const dispatch =useDispatch()
  return (
    <div className="border px-5 py-3 rounded- mt-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">                                                                                         <span
            className={cn("h-[20px] w-[20px] rounded-full inline-block", {                                                                                                      
              "bg-blue-500": task.priority === "medium",                                                                                                                                                                                                                                                                                                                                                                            
              "bg-red-500": task.priority === "high",
              "bg-green-500": task.priority === "low",
            })}
          ></span>
          <h3 className={cn({"line-through":task.isCompleted})}>{task.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="link" className="p-0">
            <Trash />
          </Button>
          <Checkbox onClick={()=>dispatch(toggleCompleted(task.id))} />
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
