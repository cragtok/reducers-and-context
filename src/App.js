import AddTask from "./components/AddTask.js";
import TaskList from "./components/TaskList.js";
import { TasksProvider } from "./contexts/TasksContext.js";

export default function TaskApp() {
    return (
        <TasksProvider>
            <h1>Prague itinerary</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    );
}
