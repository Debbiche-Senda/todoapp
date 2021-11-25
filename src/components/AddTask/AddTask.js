import React, {useState} from "react";
import "./AddTask.css";
import {useDispatch} from "react-redux";
import { addTask } from "../../JS/actions/actions";


const AddTask = () => {
    const [input, setInput]= useState('')
    const dispatch = useDispatch()
    const addtodo = () => { 
        const newTask = {
            id: Date.now(),
            description : input,
            isDone: false,
        };
        dispatch(addTask(newTask));
        setInput("");
    };

  return (
    <div className="add"> 
      <input className="myinput"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="mybutton" onClick={addtodo}> Add</button>
    </div>
  );
};

export default AddTask;
