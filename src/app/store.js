import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../features/nameSlice";
import isLoggedReducer from "../features/isLoggedSlice";
import dataReducer from "../features/dataSlice";

export default configureStore({
	reducer: {
		name: nameReducer,
		isLogged: isLoggedReducer,
		data: dataReducer,
	},
});
