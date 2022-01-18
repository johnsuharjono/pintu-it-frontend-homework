import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
	name: "user",
	initialState: {
		value: "",
	},
	reducers: {
		updateName: (state, action) => {
			state.value = action.payload.value;
		},
	},
});

export const { updateName } = nameSlice.actions;

export default nameSlice.reducer;
