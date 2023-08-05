import { createAction, props } from '@ngrx/store';
import decodedUserModel from '../../models/decodedUserModel';

export const loginStart = createAction(
  'loginStart',
  props<{ userName: string; password: string }>()
);
export const loginSuccess = createAction('loginSuccess');
export const setUser = createAction(
  'setUser',
  props<{ user: decodedUserModel }>()
);
