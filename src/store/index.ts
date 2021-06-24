import { createStore } from 'vuex';
import {
  FootballersActions,
  FootballersMutations,
  FootballersState,
  Store,
} from './index.types';

export const state: FootballersState = {
  footballers: [],
};

export const mutations: FootballersMutations = {
  SET_FOOTBALLERS: (currentState, data) => {
    // eslint-disable-next-line no-param-reassign
    currentState.footballers = data;
  },
  UPDATE_FOOTBALLER: (currentState, data) => {
    const updatedState = currentState.footballers
    // eslint-disable-next-line no-param-reassign
    currentState.footballers = updatedState;
  },
};

export const actions: FootballersActions = {

};

const store = createStore({
  state,
  mutations,
  actions,
});
export default store;

export const useStore = (): Store => store;
