import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',

};

function testing(){
  console.log('here')
  return 1
}


export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    generateInput: (state) => {
      state.value = testing()

    },
  },
});

export const { generateInput} = inputSlice.actions;
export const selectInput = (state) => state.input.value;
export default inputSlice.reducer;
