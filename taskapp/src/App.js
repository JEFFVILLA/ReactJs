import React, { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow'
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'
function App() {

  const [usernName, setUserName] = useState('Jeffri');

  const [taskItems, setTaskItems] = useState([
    { name: 'Task One', done: false },
    { name: 'Task Two', done: true },
    { name: 'Task Three', done: false },
    { name: 'Task Four', done: false },
  ])

  useEffect(() => {
    let data = localStorage.getItem('task');
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName('Jeffri')
      setTaskItems([
        { name: 'Task One Example', done: false },
        { name: 'Task Two Example', done: true },
        { name: 'Task Three Example', done: false },
        { name: 'Task Four Example', done: false },
      ])
      setShowCompleted(true)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItems));
  }, [taskItems])

  const [showCompleted, setShowCompleted] = useState(true)

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toogleTask = task => {
    setTaskItems(taskItems.map(t => (
      t.name === task.name ?
        { ...t, done: !t.done }
        : t
    )))

  }

  const taskTableRows = (doneValue) =>
    taskItems
      .filter(task => task.done === doneValue)
      .map((task, index) => (
        <TaskRow
          toggleTask={toogleTask}
          task={task}
          key={index} />
      ))
  return (
    <div>
      <TaskBanner userName={usernName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
      <div className="bg-secundary-text-white text-center p-2">
        <VisibilityControl
          description="Completed Task"
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {showCompleted && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(true)}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
