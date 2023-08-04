import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appStore/app.store';
import { postModel } from 'src/app/models/postModel';
import { addPost } from 'src/app/ngrx/postStore/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  postForm!: FormGroup;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      description: new FormControl(null, [Validators.required])
    })
  }
  onAddPost() {
    if (this.postForm.invalid) {
      return;
    }
    const post: postModel = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }

    this.store.dispatch(addPost({ post }));
    console.log("value is added")
  }
}
