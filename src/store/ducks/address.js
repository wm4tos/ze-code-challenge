import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  setAddress: ['address'],
})

const INITIAL_STATE = ''

const set = (state = INITIAL_STATE, action) => action.address ?? state

export default createReducer(INITIAL_STATE, {
  [Types.SET_ADDRESS]: set,
})
