import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/appStore/app.store';
import { postModel } from 'src/app/models/postModel';
import { updatePost } from 'src/app/ngrx/postStore/post.action';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  updateForm!: FormGroup;
  postId!: number;
  post!: postModel
  constructor(private store: Store<AppState>, private route: ActivatedRoute, private navigate: Router) { }

  ngOnInit() {
    this.updateForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required])
    })
    this.route.params.subscribe(params => {
      this.postId = +params['id'];
      this.store
        .select(state => state.posts.posts)
        .pipe(
          map(posts => posts.find(post => post.id === this.postId))
        )
        .subscribe(post => {
          if (post) {
            this.post = post;
            this.updateForm.patchValue({
              title: post.title,
              description: post.description
            });
          }
        });
    });

  }
  onUpdateForm() {
    if (this.updateForm.invalid) {
      return;
    }
    const title = this.updateForm.value.title;
    const description = this.updateForm.value.description;
    const post: postModel = {
      id: this.post.id,
      title,
      description
    }
    this.store.dispatch(updatePost({ post }))
    this.navigate.navigate(['posts'])
  }
}
