import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import randomReducer from '../features/generate/generateSlice';
export const store = configureStore({
  reducer: {
    //counter: counterReducer,
    random: randomReducer,
  },
});
