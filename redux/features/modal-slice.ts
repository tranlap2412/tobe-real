import { createSlice, PayloadAction} from '@reduxjs/toolkit'

type InitialState = {
    isShowModal:boolean,
    currentForm: string
}

const initialState = {
    isShowModal:false,
    currentForm: ''
} as InitialState

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                isShowModal: true,
                currentForm: action.payload
            }
        },
        closeModal: (state) => {
            state.isShowModal = false
        },
        switchModal: (state,action: PayloadAction<string>) => {
            state.currentForm = action.payload
        }
    }
})

export const {openModal, closeModal, switchModal} = modal.actions
export default modal.reducer