// @flow
import type { Action } from '../redux/actions';

export function createReducer(initialState: Object, handlers: Object) {
  return function reducer(state: Object = initialState, action: Action<any>) {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
  };
}