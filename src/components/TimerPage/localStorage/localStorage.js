export const UserData = {
  selectedUser: JSON.parse(localStorage.getItem("user")) || {},
  userTimeSettings: JSON.parse(localStorage.getItem("userTimeSettings")) ?? {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};

// pomodoro: JSON.parse(localStorage.getItem("Time")).pomodoro ?? 25,
// shortBreak: JSON.parse(localStorage.getItem("Time")).shortBreak || 5,
// longBreak: JSON.parse(localStorage.getItem("Time")).longBreak || 15,
