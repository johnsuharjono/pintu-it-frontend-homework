import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		value: {},
	},
	reducers: {
		updateData: (state, action) => {
			state.value = action.payload.value;
		},
	},
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
