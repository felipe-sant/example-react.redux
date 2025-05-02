import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import getApiExample from "../../services/asyncThunk/getApiExample"

const initialState = {
    count: 0,
    name: '',
    content: {
        title: '',
        body: ''
    },
    isLoading: false,
}

const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        increment: (state): void => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        reset: (state) => {
            state.count = 0
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getApiExample.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getApiExample.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getApiExample.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
    }
})

export const { increment, decrement, reset, setName } = exampleSlice.actions
export default exampleSlice.reducer