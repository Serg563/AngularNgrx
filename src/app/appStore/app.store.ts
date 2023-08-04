import { counterReducer } from '../ngrx/counter.reducer';
import { randomStore } from '../ngrx/counter.store';
import { postReducer } from '../ngrx/postStore/post.reducer';
import { PostState } from '../ngrx/postStore/post.store';
import { userReducer } from '../ngrx/userStore/user.reducer';
import { UserState } from '../ngrx/userStore/user.store';

export interface AppState {
  counter: randomStore;
  posts: PostState;
  user: UserState;
}

export const AppReducer = {
  counter: counterReducer,
  posts: postReducer,
  user: userReducer,
};
