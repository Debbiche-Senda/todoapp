import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskItem from "./components/Task/TaskItem";
import {useSelector} from "react-redux";

// const todoList = [
//   {
//     id: 45122564,
//     description: "todo1",
//     isDone: false,
//   },
//   {
//     id: 9966625,
//     description: "todo2",
//     isDone: true,
//   }
// ]

function App() {
  const todoList = useSelector((state) => state.taskReducer.taskList);
  
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__taskContainer">
          {todoList.map((item) => (
            <TaskItem item={item}
              // name={item.description}
              // done={item.isDone}
              // id={item.id}
            />
          ))}
        </div>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
