const App = {
  state: {
    LoadingApp: false,
  },
  mutations: {
    SET_LOADING_APP(state, payload) {
      state.LoadingApp = payload;
    },
  },
};

export default App;
