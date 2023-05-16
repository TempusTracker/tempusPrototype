import { users } from "./LogInForm.jsx"

export function isNameExist(name) {
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