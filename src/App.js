import { useReducer } from "react";
import AddTask from "./components/AddTask.js";
import TaskList from "./components/TaskList.js";
import tasksReducer from "./tasksReducer.js";
import { TasksContext, TasksDispatchContext } from "./contexts/TasksContext.js";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    function handleAddTask(text) {
        dispatch({
            type: "added",
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: "changed",
            task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: "deleted",
            id: taskId,
        });
    }

    return (
        <TasksContext.Provider value={tasks}>
        <TasksDispatchContext.Provider value={dispatch}>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];
