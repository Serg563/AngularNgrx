import { postModel } from 'src/app/models/postModel';
export interface PostState {
  posts: postModel[];
}
export const postInitial: PostState = {
  posts: [
    { id: 1, title: 'test1', description: 'description test1' },
    { id: 2, title: 'test2', description: 'description test2' },
  ],
};
//http://localhost:5080/api/Auth/login
//http://localhost:5080/api/Auth/register
