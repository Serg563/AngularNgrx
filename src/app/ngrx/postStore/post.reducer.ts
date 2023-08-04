import { createReducer, on } from "@ngrx/store";
import { postInitial } from "./post.store";
import { addPost, deletePost, updatePost } from "./post.action";



export const postReducer = createReducer(
    postInitial,
    on(addPost, (state, action) => {
        let newPost = { ...action.post }
        newPost.id = state.posts.length + 1
        return {
            ...state,
            posts: [...state.posts, newPost]
        }
    }),
    on(updatePost, (state, action) => {
        const updatedPost = state.posts.map(data => {
            return action.post.id === data.id ? action.post : data;
        })
        return {
            ...state,
            posts: updatedPost,
        }
    }),
    on(deletePost, (state, { id }) => {
        const filtered = state.posts.filter(x => {
            return x.id !== id
        });
        return {
            ...state,
            posts: filtered
        }
    })

)