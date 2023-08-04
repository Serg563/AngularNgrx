import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { randomStore } from '../ngrx/counter.store'
import { counterSelector, titleSelector } from '../ngrx/counter.selector';
import { AppState } from '../appStore/app.store';
@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css'],
})
export class CounteroutputComponent {
  constructor(private store: Store<{ counter: randomStore }>) { }
  count: number = 0;
  title$ = this.store.select('counter').pipe(map(state => state.title));
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => this.count = data.counter)
  }
}
