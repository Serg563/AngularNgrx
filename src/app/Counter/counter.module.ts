import { FormsModule, NgModel } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { NgModule } from '@angular/core';
import { CounteroutputComponent } from '../counteroutput/counteroutput.component';
import { ButtonsComponent } from '../buttons/buttons.component';

import { CustomCountComponent } from '../custom-count/custom-count.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../ngrx/counter.reducer';

const route: Routes = [
  {
    path: 'counter',
    component: CounterComponent,
  },
];
@NgModule({
  declarations: [
    CounterComponent,
    CounteroutputComponent,
    ButtonsComponent,
    CustomCountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(route),
    StoreModule.forFeature('counter', counterReducer),
  ],
})
export class CounterModule {}
