import {
  ADD_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
} from "../actionsTypes/actionsTypes";

const initialState = {
  taskList: [
    {
      id: 1,
      description: "Task 1",
      isDone: false,
    },
    {
      id: 2,
      description: "Task 2",
      isDone: false,
    },
    {
      id: 3,
      description: "Task 3",
      isDone: false,
    },
    {
        id: 4,
        description: "Task 4",
        isDone: false,
      },
  ],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) => 
          // if (task.id === payload.id) {
          //   return { ...task, description: payload.description };
          // } else {
          //   return task;
          // }
          task.id === payload.id ? { ...task, description: payload.description } : task
        ),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
