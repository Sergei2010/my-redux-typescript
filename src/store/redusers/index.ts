import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { todoReducer } from './todoReducer'

export const rootReducer = combineReducers({ 
	user: userReducer,
	todo: todoReducer 
})

// получаю тип, чтобы создать свой hook
export type RootState = ReturnType<typeof rootReducer>
