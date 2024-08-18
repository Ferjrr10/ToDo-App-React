import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../feature/tasks/taskSlice";
import { Link } from "react-router-dom";

export default function TasksList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-full md:w-4/6 px-4">
      <header className="flex flex-col md:flex-row justify-between items-center py-4">
        <h1 className="text-xl md:text-2xl">Total tasks: {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-4 py-2 rounded-sm text-sm mt-4 md:mt-0"
        >
          Create Task
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tasks.map((item) => (
          <div key={item.id} className="bg-neutral-800 p-4 rounded-md">
            <div>
              <header className="flex flex-col sm:flex-row justify-between">
                <h3 className="text-lg md:text-xl">{item.title}</h3>
                <div className="flex gap-x-2 mt-2 sm:mt-0">
                  <Link
                    to={`/edit-task/${item.id}`}
                    className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <p className="mt-2 text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
