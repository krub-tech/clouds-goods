export default {
  namespaced: true,
  state: {
    users: null,
  },
  getters: {},
  actions: {
    async getUsers({ commit }) {
      try {
        const users = await fetch("http://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((usersFullData) => {
            return usersFullData.reduce((acc, user) => {
              const { id, username } = user;
              acc.push({ id, username });
              return acc;
            }, []);
          });
        commit("setUsers", users);
      } catch (e) {
        console.log(e);
      }
    },
    async delUser({ state, commit }, id) {
      commit(
        "setUsers",
        state.users.filter((el) => el.id !== id)
      );
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
};
