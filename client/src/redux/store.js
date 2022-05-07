import { configureStore } from '@reduxjs/toolkit';
import screenSlice from './features/Screen.Redux';
export const store = configureStore({
	reducer: {
		screen: screenSlice,
	},
});
