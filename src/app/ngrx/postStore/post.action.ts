import { createAction, props } from "@ngrx/store";
import { postModel } from "src/app/models/postModel";

const getPosts = createAction('getPosts');
export const addPost = createAction('addPost', props<{ post: postModel }>());
export const updatePost = createAction('updatePost', props<{ post: postModel }>());
export const deletePost = createAction('deletePost', props<{ id: number }>());