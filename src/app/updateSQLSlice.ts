import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Action, DefaultState } from './interfaces'
import { RootState } from './store'

const initialState: DefaultState = {
	data: [],
	metrics: {
		query_count: 0,
		result_count: 0,
		select: 0,
		select_where: 0,
		select_left_join: 0
	}
}

export const counterSlice = createSlice({
	name: 'query',
	initialState,
	reducers: {
		update: (
			state,
			{
				payload: {
					metrics: { result_count, select, select_left_join, select_where },
					data
				}
			}: PayloadAction<Action>
		) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.data.push(data)
			state.metrics.query_count++
			state.metrics.result_count += result_count
			state.metrics.select += select
			state.metrics.select_left_join += select_left_join
			state.metrics.select_where += select_where
		}
	}
})

export const { update } = counterSlice.actions

export const selectQueries = (state: RootState) => state.queryUpdate

export default counterSlice.reducer
