import client from "@/api";
import IYA from "@/contract";

const state = {
  appBarNav: [],
};

const mutations = {
  [IYA.MUTATION.SET_APPBARNAV]: (state, data) => {
    state.appBarNav = data;
  },
};

const actions = {
  [IYA.ACTION.APPBARNAV_FETCH]({ commit }) {
    return client[IYA.ACTION.APPBARNAV_FETCH]().then((item) =>
      commit(IYA.MUTATION.SET_APPBARNAV, item)
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
