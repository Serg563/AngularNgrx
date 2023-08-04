import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customCounter } from '../ngrx/counter.action';

@Component({
  selector: 'app-custom-count',
  templateUrl: './custom-count.component.html',
  styleUrls: ['./custom-count.component.css']
})
export class CustomCountComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) { }
  count: number = 0;
  changeStore() {
    console.log(this.count)
    this.store.dispatch(customCounter({ somevalue: this.count }))
  }
}
