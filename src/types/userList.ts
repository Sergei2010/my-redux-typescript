export interface UserListState {
	users: any[]
	loading: boolean
	error: null | string
}

// экспорт перечислений
export enum UserListActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS ',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
	type: UserListActionTypes.FETCH_USERS
}

interface FetchUsersSuccessAction {
	type: UserListActionTypes.FETCH_USERS_SUCCESS
	payload: any[]
}

interface FetchUsersErrorAction {
	type: UserListActionTypes.FETCH_USERS_ERROR
	payload: string
}

export type UserListAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction
