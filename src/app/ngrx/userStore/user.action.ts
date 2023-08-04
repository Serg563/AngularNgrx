import { createAction, props } from '@ngrx/store';
import decodedUserModel from '../../models/decodedUserModel';

export const setUser = createAction(
  'setUser',
  props<{ user: decodedUserModel }>()
);
