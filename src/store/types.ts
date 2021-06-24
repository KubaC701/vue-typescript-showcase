/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommitOptions, DispatchOptions, Store, ActionContext } from 'vuex';

export type ExtendedActionContext<
  S,
  M
> = {
  commit<K extends keyof M>(key: K, payload: Parameters<M[K]>[1]): ReturnType<M[K]>;
} & Omit<ActionContext<S, S>, 'commit'>;

export type ExtendedStore<
  S,
  M,
  A
> = Omit<Store<S>, 'commit' | 'dispatch'> & {
  commit<K extends keyof M, P extends Parameters<M[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ): ReturnType<M[K]>;
} & {
  dispatch<K extends keyof A>(
    key: K,
    payload?: Parameters<A[K]>[1],
    options?: DispatchOptions,
  ): ReturnType<A[K]>;
};
