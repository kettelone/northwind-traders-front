const getPageCount = (totalCount: number, limit: number) => {
	return Math.ceil(totalCount / limit)
}

const getPagesArray = (totalPages: number) => {
	let result = []
	for (let i = 0; i < totalPages; i++) {
		result.push(i + 1)
	}
	return result
}

export { getPageCount, getPagesArray }
