const Project = {
  state: {
    loadingProject: false,
    reports: [
      {
        id: 1,
        title: "Ocean Paradise - Backround Video Website",
        created: "Dec 23, 2021",
        image: "https://i.ibb.co/z7KNjYm/oceanparadise-vercel-app.png",
        description:
          "this is a website learning from https://www.youtube.com/watch?v=aHH2pHnWWig",
        designer: "Online Tutorial",
        linkDesigner:
          "https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog",
        link: "https://oceanparadise.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/ocean-paradise",
        category: ["Vue.js"],
      },
      {
        id: 2,
        title: "Moonlight - Parralax Website",
        created: "Dec 24, 2021",
        image: "https://i.ibb.co/R3LkVyz/moonllight-vercel-app.png",
        description:
          "this is a website learning from https://www.youtube.com/watch?v=4OiNwNWHGyo",
        designer: "Online Tutorial",
        linkDesigner:
          "https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog",
        link: "https://moonllight.vercel.app/",
        sourceCode: "https://github.com/lazlanrafar/moonllight",
        category: ["Vue.js"],
      },
    ],
    category: ["All", "Figma", "Vue.js", "React.js", "Laravel"],
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
