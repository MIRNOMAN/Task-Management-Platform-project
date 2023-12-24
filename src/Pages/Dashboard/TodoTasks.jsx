import axios from "axios";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { TiDelete } from "react-icons/ti";
import { useDrag } from "react-dnd";


const TodoTasks = ({task,refetch}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: {id: task._id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    console.log(isDragging);
    const handleToDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://management-platform-server-project.vercel.app/tasks/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className="card w-52 md:w-72 lg:w-full bg-purple-500 text-primary-content cursor-grab" ref={drag}>
            <div className="card-body">
                <h2 className="card-title">{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.deadline}</p>
                <p>{task.priority}</p>
                <div className="card-actions justify-start">
                    <button className="btn"><TiDelete className="text-3xl" onClick={() => handleToDelete(task._id)}></TiDelete></button>
                    <Link to={`/dashboard/taskUpdate/${task._id}`}><button className="btn"><RxUpdate className="text-3xl"></RxUpdate></button></Link>
                </div>
            </div>
        </div>
    );
};

export default TodoTasks;