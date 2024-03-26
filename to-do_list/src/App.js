import { useEffect, useState } from 'react';
import './App.css';
import TodoListItem from './todoListItem';


function App() {

  const [taskArray, setTaskArray] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      setTaskArray(parsedTasks);
    }
    else {
      setTaskArray([]);
    }
  }, []);

  const addTask = () => {
    if (taskText.trim() !== "") {
      const newTaskArray = [...taskArray, { text: taskText, completed: false }];
      setTaskArray(newTaskArray)
      setTaskText("");
      localStorage.setItem('tasks', JSON.stringify(newTaskArray));
    }
    // localStorage.setItem('tasks', JSON.stringify(taskArray))
  };

  const deleteTask = (id) => {
    setTaskArray(prevValue => {
      const updatedTasks = prevValue.filter((item, index) => {
        return index !== id;
      });
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  }

  const toggleTaskCompletion = (id) => {
    setTaskArray(prevValue => {
      return prevValue.map((item, index) => {
        if (index === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
    const updatedTasks = taskArray.map((task, index) => ({ ...task })); // Create a copy
    updatedTasks[id].completed = !updatedTasks[id].completed; // Update completion status in copy
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }


  return (
    <div className="app">
      <div className="headerImage">
        <div className="headerImage"></div>
        <div className="activeContainer">
          <div className="mainContainer">
            <div className="header">
              <div className="mainHeaderBar">
                <h2 className="mainHeaderBarText">TODO</h2>
              </div>
            </div>
            <div className="listBody">
              <div className="addNewTask">
                <input type="text" name="todo" className="todoInput" id="todo" autoFocus autoCapitalize='words' placeholder="Create a new todo..." autoComplete='off' value={taskText.charAt(0).toUpperCase() + taskText.slice(1)} onChange={(event) => setTaskText(event.target.value)} onKeyDown={handleKeyDown} />
                {/* <button className="addTodoButton" type="button" onClick={addTask}>Add</button> */}
                <div className="addTodoButton" onClick={addTask}>
                  <svg className="addCross" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </div>
              </div>
              <div className="listContainer">
                {taskArray.map((task, index) => {
                  return (
                    <TodoListItem key={index} id={index} text={task.text} delete={deleteTask} completed={task.completed} toggleCompletion={toggleTaskCompletion} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;