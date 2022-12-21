import { useReducer } from "react";
import AddTask from "./components/AddTask.js";
import TaskList from "./components/TaskList.js";
import tasksReducer from "./tasksReducer.js";
import { TasksContext, TasksDispatchContext } from "./contexts/TasksContext.js";

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                <h1>Prague itinerary</h1>
                <AddTask />
                <TaskList />
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];
