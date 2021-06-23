import getFootballers from '@/services/getFootballers';
import { Footballer } from '@/types/Footballer';
import { createStore } from 'vuex';
import {
  ActionTypes,
  FootballersActions,
  FootballersMutations,
  FootballersState,
  MutationTypes,
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
    const footballerToReplace = currentState.footballers.find(
      footballer => data.name === footballer.name,
    );
    const updatedState = currentState.footballers.map(footballer =>
      footballer.name === footballerToReplace?.name ? footballerToReplace : footballer,
    );
    // eslint-disable-next-line no-param-reassign
    currentState.footballers = updatedState;
  },
};

export const actions: FootballersActions = {
  [ActionTypes.FETCH_FOOTBALLERS]({ commit }) {
    const footballers = getFootballers();
    commit(MutationTypes.SET_FOOTBALLERS, footballers);
    return footballers;
  },
};
const store = createStore<{ footballers: Footballer[] }>({
  state,
  mutations,
  actions,
});
export default store;

export const useStore = (): Store => store as Store;
