const Work = {
  state: {
    loadingWork: false,
    reports: [
      {
        title: "Jurnal Ilmu Administrasi Public - UNISRI",
        description:
          "This is my first project to make UI together with the team using figma, this is a website that contains personal scientific journals from UNISRI university",
        source: "https://github.com/GunawanAhmad/Sisfo-Klinik-Full-Stack",
        link: "https://www.figma.com/file/PkrvcVMMNDPHSZbdcHYj4Q/JIAP---Universitas-Slamet-Riyadi?node-id=0%3A1",
        codeTools: ["Figma"],
        design: "Design by Me & @alzdesco",

        img: "https://i.ibb.co/8YHzrDh/jiap.png",
        key: 1,
      },
    ],
  },
  mutations: {
    SET_LOADING_WORK(state, payload) {
      state.loadingWork = payload;
    },
  },
  actions: {},
};

export default Work;
