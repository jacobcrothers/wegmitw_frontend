import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    getData: (state, action) => {
      axios.post('http://localhost:5000/home/buyers')
        .then((res) => {
          alert(res);
          console.log(res);
        });
    }
  }
});

export const { getData } = menuSlice.actions;

export default menuSlice.reducer;
