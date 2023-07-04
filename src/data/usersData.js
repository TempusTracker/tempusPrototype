const usersData = [
  {
    id: 1,
    userProperties: {
      login: "Nikita",
      Email: "nikita@mail.com",
      Password: "lol",
      TeamCode: 22,
      Role: "admin",
      InviteCode: "22",
    },
    userTimeSettings: {
      workTime: 2,
      shortBreak: 1,
      longBreak: 3,
    },
    userTasks: [
      {
        TaskName: "Утвердить макет",
        DateOfCompletion: "2023-05-17T03:24:00",
        SubTasks: ["Согласовать с Екатериной", "Согласовать с Никитой"],
        Сomments: {
          userName: "userName",
          userIcon: "userIcon",
          userMessage: "message",
          DateOfMessage: "2023-05-17T03:24:00",
        },
      },
      {
        TaskName: "Разработать сайт тайм менеджмента:",
        DateOfCompletion: "2023-05-17T03:24:00",
        SubTasks: [
          "Подобрать цветовую схему",
          "Подобрать шрифтовую пару",
          "Разработать логотип сервиса",
        ],
      },
      {
        TaskName: "test",
        DateOfCompletion: "2023-05-17T03:24:00",
        SubTasks: [
          "1 sub",
          "2 sub",
          "3suuubbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        ],
      },
      {
        TaskName: "Разработать сайт test тайм менеджмента:",
        DateOfCompletion: "2023-05-17T03:24:00",
        SubTasks: ["Пntttteeeaaaass", "Подобрать шрифтовую паруtest", "test"],
      },
    ],
  },
  {
    id: 2,
    userProperties: {
      login: "kate",
      Email: "kate@mail.com",
      Password: "lol",
      TeamCode: "none",
      Role: "",
      InviteCode: "",
      TotalTime: "",
    },
    userTimeSettings: {
      workTime: 25,
      shortBreak: 5,
      longBreak: 15,
    },
  },
  {
    id: 3,
    userProperties: {
      login: "Masha",
      Email: "masha@mail.com",
      Password: "lols",
      TeamCode: 22,
      Role: "",
      InviteCode: "",
      TotalTime: "",
    },
    userTimeSettings: {
      workTime: 34,
      shortBreak: 7,
      longBreak: 17,
    },
  },
  // Другие пользователи
];

export default usersData;
