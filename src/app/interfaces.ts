type Action = {
	data: {
		sqlString: string
		timing: number
		date: string
	}
	metrics: {
		query_count: number
		result_count: number
		select: number
		select_where: number
		select_left_join: number
	}
}

interface DefaultState {
	data: {
		sqlString?: string
		timing?: number
		date?: string
	}[]
	metrics: {
		query_count: number
		result_count: number
		select: number
		select_where: number
		select_left_join: number
	}
}

export { Action, DefaultState }
