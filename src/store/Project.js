const Project = {
  state: {
    loadingProject: false,
    reports: [
      {
        id: 1,
        title: "Ocean Paradise",
        image:
          "https://cdn.dribbble.com/users/108671/screenshots/17251219/media/af82faab21379be7845f9fc1bda78817.jpg?compress=1&resize=1200x900&vertical=top",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, fuga tempora praesentium, suscipit, dignissimos molestias perferendis quo amet quaerat quia dicta? Officia, reiciendis laborum harum eveniet aut suscipit pariatur!",
        link: "http://google.com",
        category: ["Vue.js"],
      },
      {
        id: 2,
        title: "Ocean Paradise",
        logo: "https://cdn2.unrealengine.com/egs-suchartgeniusartistsimulator-voolgi-ic1-400x146-5e9db06d7b87.png?h=270&resize=1&w=480",
        image:
          "https://cdn.dribbble.com/users/4898370/screenshots/17253512/media/ed336ab457542828fd51a53267fef1ee.png?compress=1&resize=1200x900&vertical=top",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, fuga tempora praesentium, suscipit, dignissimos molestias perferendis quo amet quaerat quia dicta? Officia, reiciendis laborum harum eveniet aut suscipit pariatur!",
        link: "http://google.com",
        sourceCode: "http://google.com",
        category: ["Vue.js", "Figma"],
      },
      {
        id: 3,
        title: "Ocean Paradise",
        image:
          "https://cdn.dribbble.com/users/2577653/screenshots/17247517/media/65e505ceb40e1c2a599f99d95d704daf.png?compress=1&resize=1200x900&vertical=top",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, fuga tempora praesentium, suscipit, dignissimos molestias perferendis quo amet quaerat quia dicta? Officia, reiciendis laborum harum eveniet aut suscipit pariatur!",
        link: "http://google.com",
      },
      {
        id: 4,
        title: "Ocean Paradise",
        image:
          "https://cdn.dribbble.com/users/2247697/screenshots/17247016/media/f927836e45658fb74bd4105817478679.jpg?compress=1&resize=1200x900&vertical=top",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, fuga tempora praesentium, suscipit, dignissimos molestias perferendis quo amet quaerat quia dicta? Officia, reiciendis laborum harum eveniet aut suscipit pariatur!",
        link: "http://google.com",
      },
      {
        id: 4,
        title: "Ocean Paradise",
        image:
          "https://cdn.dribbble.com/users/2247697/screenshots/17247016/media/f927836e45658fb74bd4105817478679.jpg?compress=1&resize=1200x900&vertical=top",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, fuga tempora praesentium, suscipit, dignissimos molestias perferendis quo amet quaerat quia dicta? Officia, reiciendis laborum harum eveniet aut suscipit pariatur!",
        link: "http://google.com",
      },
      {
        id: 4,
        title: "Ocean Paradise",
        image:
          "https://cdn.dribbble.com/users/2247697/screenshots/17247016/media/f927836e45658fb74bd4105817478679.jpg?compress=1&resize=1200x900&vertical=top",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam adipisci, fuga tempora praesentium, suscipit, dignissimos molestias perferendis quo amet quaerat quia dicta? Officia, reiciendis laborum harum eveniet aut suscipit pariatur!",
        link: "http://google.com",
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
