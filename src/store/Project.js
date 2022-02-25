const Project = {
  state: {
    loadingProject: false,
    reports: [
      {
        title: "Ocean Paradise - Backround Video Website",
        created: "Dec 23, 2021",
        image: "https://i.ibb.co/z7KNjYm/oceanparadise-vercel-app.png",
        designer: "Online Tutorial",
        link: "https://oceanparadise.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/ocean-paradise",
        category: ["Vue.js"],
      },
      {
        title: "Moonlight - Parralax Website",
        created: "Dec 24, 2021",
        image: "https://i.ibb.co/R3LkVyz/moonllight-vercel-app.png",
        designer: "Online Tutorial",
        link: "https://moonllight.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/moonllight",
        category: ["Vue.js", "Tailwind"],
      },
      {
        id: 3,
        title: "Foodyar - Cooking Course Website",
        created: "Jan 25, 2022",
        image: "https://i.ibb.co/MhvB9mm/Capture.png",
        designer: "Buildwithangga",
        link: "https://foodyar-azure.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/foodyar",
        category: ["Vue.js", "Tailwind"],
      },
    ],
    report: [],
  },
  mutations: {
    SET_LOADING_PROJECT(state, payload) {
      state.loadingProject = payload;
    },
    SET_REPORT(state, payload) {
      state.report = payload;
    },
  },
  actions: {},
};

export default Project;
