import './App.css';

function App() {
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
                <input type="text" name="todo" className="todoInput" id="todo" placeholder="Create a new todo..." />
                <button className="addTodoButton" type="button">Add</button>
              </div>
              <div className="listContainer">
                <div className="todoListItem">
                  <input type="radio" name="completeMarker1" className="completed" />
                  <p className="todoListText">Go to the gym today</p>
                </div>
                <div className="todoListItem">
                  <input type="radio" name="completeMarker2" className="completed" />
                  <p className="todoListText">Pick up some groceries</p>
                </div>
                <div className="todoListItem">
                  <input type="radio" name="completeMarker3" className="completed" />
                  <p className="todoListText">Get the car from the mechanic</p>
                </div>
                <div className="todoListItem">
                  <input type="radio" name="completeMarker4" className="completed" />
                  <p className="todoListText">Drop off the tablet at the technicians</p>
                </div>
                <div className="todoListItem">
                  <input type="radio" name="completeMarker5" className="completed" />
                  <p className="todoListText">Wash the dishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;