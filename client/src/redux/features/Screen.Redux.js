import { createSlice } from '@reduxjs/toolkit';

export const screenSlice = createSlice({
	name: 'screen',
	initialState: {
		width: 0,
		// width: 1020,
	},
	reducers: {
		setWidth: (state, action) => {
			state.width = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setWidth } = screenSlice.actions;

export default screenSlice.reducer;
