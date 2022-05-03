import { configureStore } from '@reduxjs/toolkit';
import contactUsSlice from './features/ContactUs.Redux';
export const store = configureStore({
	reducer: {
		contactUs: contactUsSlice,
	},
});
