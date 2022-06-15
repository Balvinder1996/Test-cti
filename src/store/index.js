import create from 'zustand'
import Actions from './action'

const initialState = {
    tokenStatus: false,
    adminStatus: false,
}

export const useStore = create(set => ({
    ...initialState,
    ...Actions(set)
}))

