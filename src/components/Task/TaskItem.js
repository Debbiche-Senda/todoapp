import React from "react";
import "./TaskItem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../JS/actions/actions";
import EditTask from "../EditTask/EditTask";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TaskItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(completeTask(item.id));
  };
  const handleDelete = () => {
    dispatch(deleteTask(item.id));
  };
  return (
    <div className="taskItem">
      <Checkbox
        {...label}
        checked={item.isDone}
        color="primary"
        onChange={handleCheck}
      />
      <p className={item.isDone && "taskItem--done"}>{item.description}</p>
      <button className="btn" onClick={handleDelete}>X</button>

      <EditTask name={item.description} done={item.isDone} id={item.id} />
    </div>
  );
};

export default TaskItem;
