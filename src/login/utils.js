import { users } from "./script.js"

export function isNameExist(name) {
	console.log(users)
	for (let i = 0; i < users.length; i++) {
		if (users[i].Name === name) {
			return true
		}
	}
	return false
}

export function isEmailExist(email) {
	for (let i = 0; i < users.length; i++) {
		if (users[i].Email === email) {
			return true
		}
	}
	return false
}