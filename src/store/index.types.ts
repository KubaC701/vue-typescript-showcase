import { Footballer, FootballerPosition } from '@/types/Footballer';
import { ExtendedActionContext, ExtendedStore } from './types';

export type FootballersState = {
  footballers: Footballer[];
};

export enum MutationTypes {
  SET_FOOTBALLERS = 'SET_FOOTBALLERS',
  UPDATE_FOOTBALLER = 'UPDATE_FOOTBALLER',
}

export enum ActionTypes {
  FETCH_FOOTBALLERS = 'FETCH_FOOTBALLERS',
  CHANGE_POSITION = 'CHANGE_POSITION',
}

export type FootballersMutations<S = FootballersState> = {
  [MutationTypes.SET_FOOTBALLERS](state: S, payload: Footballer[]): void;
  [MutationTypes.UPDATE_FOOTBALLER](state: S, payload: Footballer): void;
};

export type FootballersActions = {
  [ActionTypes.FETCH_FOOTBALLERS](
    context: ExtendedActionContext<FootballersState, FootballersMutations>,
  ): Footballer[];
  [ActionTypes.CHANGE_POSITION](
    context: ExtendedActionContext<FootballersState, FootballersMutations>,
    payload: {footballer: Footballer, position: FootballerPosition}
  ): Footballer;
};

export type FootballersGetters = {
  [ActionTypes.FETCH_FOOTBALLERS]({
    commit,
  }: ExtendedActionContext<FootballersState, FootballersMutations>): Footballer[];
};

export type Store = ExtendedStore<FootballersState, FootballersMutations, FootballersActions>;
