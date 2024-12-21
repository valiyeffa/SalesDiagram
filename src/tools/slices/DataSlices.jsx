import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        labels: '2014',
        values: '50'
    },
    {
        labels: '2016',
        values: '23'
    }
]

const DataSlices = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, action) => {
            const newData = { labels: action.payload.labels , values: action.payload.values }
            state.push(newData);
        }
    }
})

export default DataSlices.reducer;
export const { add } = DataSlices.actions;