import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { postModel } from '../models/postModel';
import { Observable, map } from 'rxjs';
import { PostState } from '../ngrx/postStore/post.store';
import { AppState } from '../appStore/app.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { deletePost } from '../ngrx/postStore/post.action';
import { PostService } from '../Services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts$: Observable<postModel[]> | undefined;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  postsFromService$: Observable<postModel[]> = this.postService.GetAllPosts();

  ngOnInit() {
    this.posts$ = this.store.select('posts').pipe(map((data) => data.posts));
    console.log(this.posts$);
  }
  onDeletePost(id: number) {
    if (confirm('are you sure?')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
