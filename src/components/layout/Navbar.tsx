import { Logo } from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../ui/ModeToggle";
import AddModal from './../modules/tasks/AddModal';

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto h-6 flex items-center gap-3 px-5">
        <div className="flex items-center gap-2">
            <Logo/> <span className="font-bold ml-1">Task</span> Master
        </div>
        <div className="flex items-center gap-3">
          <Link to='users'>Users</Link>
          <Link to='task'>Tasks</Link>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle/>
          
        </div>
    </div>
  )
}

                                