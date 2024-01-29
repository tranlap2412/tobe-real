import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    isShowLeftSidebar:boolean
}

const initialState = {
    isShowLeftSidebar:false,
} as InitialState

export const leftsidebar = createSlice({
    name: 'dashboard-left-sidebar',
    initialState,
    reducers: {
        toggleLeftSidebar: (state) => {
            state.isShowLeftSidebar = !state.isShowLeftSidebar
        }
    }
})

export const { toggleLeftSidebar } = leftsidebar.actions
export default leftsidebar.reducer