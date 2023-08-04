import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../ngrx/postStore/post.reducer';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'update/:id', component: UpdatePostComponent },
    ],
  },
];
@NgModule({
  declarations: [PostComponent, AddPostComponent, UpdatePostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', postReducer),
  ],
})
export class PostModule {}
