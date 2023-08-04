import { createReducer, on } from "@ngrx/store";
import { customCounter, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.store";

export const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customCounter, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.somevalue
        }
    })
)
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action)
}