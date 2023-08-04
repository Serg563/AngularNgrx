import { createReducer, on } from '@ngrx/store';
import { initialUserState } from './user.store';
import { setUser } from './user.action';

export const userReducer = createReducer(
  initialUserState,
  on(setUser, (state, { user }) => {
    return {
      ...state,
      user: user,
    };
  })
);
