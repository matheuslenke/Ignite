import { useState } from 'react'

import '../styles/tasklist.scss'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    if(newTaskTitle !== "") {
      const newTask: Task = {
        id: Math.floor(Math.random() * 10000),
        title: newTaskTitle,
        isComplete: false,
      }
      const newTasksArray = [...tasks, newTask];
      console.log(newTasksArray)
      setTasks(newTasksArray);
    }
  }

  function handleToggleTaskCompletion(id: number) {
    // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    const taskToModify = tasks.find(task => task.id === id);
    if (taskToModify) {
      console.log(taskToModify)
      const newTask: Task = {
        id: taskToModify.id,
        title: taskToModify.title,
        isComplete: !taskToModify.isComplete,
      }
      const newTasksArray = tasks.filter(task => task.id !== taskToModify.id)
      setTasks([...newTasksArray, newTask])
    }
  }

  function handleRemoveTask(id: number) {
    const taskToRemove = tasks.find(task => task.id === id);
    if(taskToRemove) {
      const newTasksArray = tasks.filter(task => task.id !== id);
      setTasks(newTasksArray);
    }
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input 
            type="text" 
            placeholder="Adicionar novo todo" 
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
            <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash size={16}/>
              </button>
            </li>
          ))}
          
        </ul>
      </main>
    </section>
  )
}