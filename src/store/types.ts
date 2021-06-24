/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommitOptions, DispatchOptions, Store as VuexStore, ActionContext } from 'vuex';

export type ExtendedActionContext<
  S extends Record<string, any>,
  M extends { [key: string]: (state: S, payload: any) => void }
> = {
  commit<K extends keyof M>(key: K, payload: Parameters<M[K]>[1]): ReturnType<M[K]>;
} & Omit<ActionContext<S, S>, 'commit'>;

export type ExtendedStore<
  S extends Record<string, any>,
  M extends Record<string, (state: S, payload: any) => void>,
  A extends Record<string, (context: ActionContext<S, S>) => any>
> = Omit<VuexStore<S>, 'commit' | 'dispatch'> & {
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
