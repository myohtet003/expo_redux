import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface User {
	id: number;
	name: string;
	age: number;
}

interface CounterState {
	value: number;
	users: User[];
}

const initialState: CounterState = {
	value: 0,
	users: [
		{id: 1, name: "John Doe", age: 30},
		{id: 2, name: "Jane Smith", age: 25},
		{id: 3, name: "Alice Johnson", age: 15},
	],
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
	selectors: {
		countUsers: (state) => {
			const newUsers = state.users.filter((user) => user.age > 18);
			return newUsers.length;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { countUsers } = counterSlice.selectors;
// export const counter = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
