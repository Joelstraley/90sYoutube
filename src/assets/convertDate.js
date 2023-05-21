export function convertDate(date) {
	let updatedDate = ''

	if (date) {
		let myDate = new Date(date)
		let dateStr = myDate.toString()
		let dateArr = dateStr.split(' ')

		updatedDate = `  ${dateArr[0]}, ${dateArr[1]}  ${dateArr[2]}, 1995`
	}

	return updatedDate
}
