import axios from 'axios';

const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const DELETE_STORE = 'DELETE_SUCCESS';
const CREATE_SUCCESS = 'CREATE_SUCCESS';

const state = {
  data: [],
  store: {}, // My store
};

const mutations = {
  [REQUEST_SUCCESS](state, data) {
    state.data = data;
  },
  [CREATE_SUCCESS](state, data) {
    state.data = data;
  },
};

const actions = {
  async fetchStores({ commit }) {
    const res = await axios.get('http://localhost:3000/stores');
    commit(REQUEST_SUCCESS, res.data);
  },
  async createStore({ commit }) {
    const res = await axios.post('http://localhost:3000/stores');
    commit(CREATE_SUCCESS, res.data);
  },

  async deleteStore({ commit }, id) {
    const res = await axios.delete(`http://localhost:3000/stores/${id}`);
    commit(res.data);
  },
};

export default {
  state,
  mutations,
  actions,
};
