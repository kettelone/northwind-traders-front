interface SearchResultCustomers {
	data: {
		result: {
			rows: {
				companyName?: string
				id?: number
				contactName?: string
				contactTitle?: string
				phone?: string
			}[]
		}
		searchData: {
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
	}
}

interface SearchResultProducts {
	data: {
		result: {
			rows: {
				id: number
				productName: string
				quantityPerUnit: string
				unitPrice: string
				unitsInStock: number
			}[]
		}
		searchData: {
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
	}
}

export { SearchResultCustomers, SearchResultProducts }
