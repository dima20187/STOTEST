// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   filmState: [],
// };

// const apiKey = '4ecef7e0abcb8da19882bf5bbd0d55ce';

// export const loadSite = createAsyncThunk('update/permissions', async (action) => {
//   try {
//     console.log(1);
//     const siteResponse = await fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${apiKey}`);
//     const response = await siteResponse.json();
//     if (response.ok) {
//       const data = await response.json();
//       // console.log({ data });
//       return data;
//     }
//   } catch (err) {
//     console.log('update permissions error', err);
//   }
// });

// const dashbordSlice = createSlice({
//   name: 'dashbordScreen',
//   initialState,
//   reducers: {
//     firstReducer: (state) => {
//       console.log(1);
//       state.firstReducer = true;
//     },
//   },
//   extraReducers: (dashbordScreen) => {
//     dashbordScreen.addCase(loadSite.pending, (state) => {
//       console.log(2);
//       return { ...state };
//     });
//     dashbordScreen.addCase(loadSite.fulfilled, (state, { payload }) => {
//       console.log(5);
//       return {
//         ...state,
//         filmState: payload,
//       };
//     });
//     dashbordScreen.addCase(loadSite.rejected, (state) => {
//       console.log(3);
//       return { ...state };
//     });
//   },
// });

// export const {
//   firstReducer,
// } = dashbordSlice.actions;

// // export const selectDashbordScreen = (state) => state.dashbordScreen;

// export default dashbordSlice;
