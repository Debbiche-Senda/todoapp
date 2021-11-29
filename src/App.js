import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskItem from "./components/Task/TaskItem";
import {useSelector} from "react-redux";
import {useState} from "react";
import Filter from "./components/Filter/Filter";

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
  const [filter, setFilter]= useState("all")
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__taskContainer">
          { filter === "all"?
          todoList.map((item) => (
            <TaskItem item={item} />
          )):
          filter ==="done" ? todoList.filter(item=> item.isDone === true).map((item) => (
            <TaskItem item={item} />)):
           todoList.filter(item=> item.isDone === false).map((item) => (
              <TaskItem item={item} />))
            }
        </div>
        <Filter setFilter={setFilter} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
