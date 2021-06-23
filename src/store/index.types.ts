import { Footballer } from '@/types/Footballer';
import { CommitOptions, DispatchOptions, Store as VuexStore } from 'vuex';
import { ExtendedActionContext } from './types';

export type FootballersState = {
  footballers: Footballer[];
};

export enum MutationTypes {
  SET_FOOTBALLERS = 'SET_FOOTBALLERS',
  UPDATE_FOOTBALLER = 'UPDATE_FOOTBALLER',
}

export enum ActionTypes {
  FETCH_FOOTBALLERS = 'FETCH_FOOTBALLERS',
}

export type FootballersMutations<S = FootballersState> = {
  [MutationTypes.SET_FOOTBALLERS](state: S, payload: Footballer[]): void;
  [MutationTypes.UPDATE_FOOTBALLER](state: S, payload: Footballer): void;
};

export type FootballersActions = {
  [ActionTypes.FETCH_FOOTBALLERS]({
    commit,
  }: ExtendedActionContext<FootballersState, FootballersMutations>): Footballer[];
};

export type Store = Omit<VuexStore<FootballersState>, 'commit' | 'dispatch'> & {
  commit<K extends keyof FootballersMutations, P extends Parameters<FootballersMutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ): ReturnType<FootballersMutations[K]>;
} & {
  dispatch<K extends keyof FootballersActions>(
    key: K,
    payload?: Parameters<FootballersActions[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<FootballersActions[K]>;
};
