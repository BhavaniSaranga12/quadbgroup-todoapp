import { createSlice } from '@reduxjs/toolkit';


const loadState = () => {
    try {
      const localState = localStorage.getItem('tasks');
      return localState ? JSON.parse(localState) : [];
    } catch (err) {
      console.error('Could not load state', err);
      return [];
    }
  };

  const saveState = (state) => {
    try {
      const localState = JSON.stringify(state);
      localStorage.setItem('tasks', localState);
    } catch (err) {
      console.error('Could not save state', err);
    }
  };


const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), title:action.payload.task, description: action.payload.description , completed: false });
      saveState(state);
    },
    deleteTask: (state, action) => {
      const newState= state.filter(task => task.id !== action.payload);
            saveState(newState);
            return newState;
    },
    editTask: (state, action) => {
        const { id, title, description } = action.payload;
        const task = state.find((task) => task.id === id);
        if (task) {
          task.title = title;
          task.description = description;
          saveState(state);
        }
    },
    toggleTask: (state, action) => {
      const existingTask = state.find(task => task.id === action.payload);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
        saveState(state);
      }
    }
  }
});

export const { addTask, deleteTask, editTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
