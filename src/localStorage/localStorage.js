export const UserFullData = JSON.parse(localStorage.getItem("user")) || {};
export default function LocalStorageSave(user) {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("logged", JSON.stringify(true));
}
