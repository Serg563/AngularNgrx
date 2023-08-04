import { createFeatureSelector, createSelector } from "@ngrx/store";
import { randomStore } from "./counter.store";

const selectFeature = createFeatureSelector<randomStore>('counter')

export const counterSelector = createSelector(selectFeature, (state) => {
    return state.counter
})

export const titleSelector = createSelector(selectFeature, (state) => {
    return state.title
})