import userModel from '../../models/userModel';
import decodedUserModel from '../../models/decodedUserModel';

export interface UserState {
  user: decodedUserModel | null;
}

export const initialUserState: UserState = {
  user: null,
};
