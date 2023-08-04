import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { userReducer } from '../ngrx/userStore/user.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', userReducer),
  ],
})
export class PostModule {}
