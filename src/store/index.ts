import { changePosition } from '@/helpers/footballer';
import getFootballers from '@/services/getFootballers';
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
      footballer => data.id === footballer.id,
    );
    const updatedState = currentState.footballers.map(footballer =>
      footballer.id === footballerToReplace?.id ? footballerToReplace : footballer,
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
  [ActionTypes.CHANGE_POSITION]({ commit }, {footballer, position}) {
    const newPlayer = changePosition(footballer, position);
    commit(MutationTypes.UPDATE_FOOTBALLER, newPlayer);
    return newPlayer;
  },
};

const store = createStore<FootballersState>({
  state,
  mutations,
  actions,
});
export default store;

export const useStore = (): Store => store;
