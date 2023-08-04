export interface randomStore {
    counter: number;
    title: string
}

export const initialState: randomStore = {
    counter: 5,
    title: "Hello from store"
}