import React, { useState, useRef } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");

  const [task, setTask] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    taskInput.current?.focus();
  };

  const addTask = (name: string) => {
    const newTasks = [...task, { name: name, done: false }];
    setTask(newTasks);
  };

  const toggleDoneTask = (index: number): void => {
    const newTasks: ITask[] = [...task];
    newTasks[index].done = !newTasks[index].done;
    setTask(newTasks);
  };

  const removeTask = (index: number): void => {
    const deletedTasks: ITask[] = [...task];
    deletedTasks.splice(index, 1);
    setTask(deletedTasks);
  };

  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <input
                  className='form-control'
                  type='text'
                  value={newTask}
                  autoFocus
                  ref={taskInput}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button className='btn btn-success btn-block mt-2'>Save</button>
              </form>
            </div>
          </div>
          {task.map((t: ITask, index) => (
            <div key={index} className='card card-body mt-2'>
              <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                {t.name}
              </h2>
              <div>
                <button
                  className='btn btn-secondary'
                  onClick={() => toggleDoneTask(index)}>
                  {t.done ? "✓" : "X"}
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => removeTask(index)}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
