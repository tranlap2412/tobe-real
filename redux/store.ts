import { configureStore } from '@reduxjs/toolkit'
import  modalReducer from './features/modal-slice'
import leftsidebarReducer  from './features/dashboard-left-sidebar'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
    reducer: {
        modalReducer,
        leftsidebarReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;