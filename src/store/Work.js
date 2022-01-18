const Work = {
  state: {
    loadingWork: false,
    reports: [
      {
        title: "Web Application for Online Consultation (Kliniku)",
        description:
          "Kliniku is an online consultation platform where people can fill in an online form about their health issue to send for a doctor. The doctor can respond and give them medical advice.",
        source: "https://github.com/GunawanAhmad/Sisfo-Klinik-Full-Stack",
        link: "",
        codeTools: ["VueJS", "MongoDB", "NodeJs", "ExpressJS"],
        design: "Design by Faris Azizy",
        img: "https://gunawanahmad.github.io/img/kliniku.5888c118.svg",
        key: 1,
      },
    ],
    category: ["All", "Figma", "Vue.js", "React.js", "Laravel"],
    report: [],
  },
  mutations: {
    SET_LOADING_WORK(state, payload) {
      state.loadingWork = payload;
    },
  },
  actions: {},
};

export default Work;
