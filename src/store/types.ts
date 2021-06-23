import { ActionContext, MutationTree, ActionTree, GetterTree } from 'vuex';

export type Mutations<S, M> = MutationTree<S> & M;
export type Actions<S, A> = ActionTree<S, S> & A;
export type Getters<S, G> = GetterTree<S, S> & G;

export type ExtendedActionContext<
  S extends Record<string, unknown>,
  M extends { [key: string]: (state: S, payload: any) => void }
> = {
  commit<K extends keyof M>(key: K, payload: Parameters<M[K]>[1]): ReturnType<M[K]>;
} & Omit<ActionContext<S, S>, 'commit'>;
