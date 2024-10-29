import { useState } from 'react'

interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
}

const Todolistapp = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [filter, setFilter] = useState<string>('all');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), title: newTask, isCompleted: false }]);
            setNewTask('');
        }
    };

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.isCompleted;
        if (filter === 'active') return !task.isCompleted;
        return true; // 'all'
    });

    return (
        <div>
            <h1>To-Do List</h1>

            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>Add Task</button>

            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('active')}>Active</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
            </div>

            <ul>
                {filteredTasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.isCompleted}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                            {task.title}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todolistapp;
