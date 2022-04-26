import { UserListState, UserListAction, UserListActionTypes } from '../../types/userList'

const initialState: UserListState = {
	users: [],
	loading: false,
	error: null,
}

export const userListReducer = (state = initialState, action: UserListAction): UserListState => {
	switch (action.type) {
		case UserListActionTypes.FETCH_USERS:
			return { loading: true, error: null, users: [] }
		case UserListActionTypes.FETCH_USERS_SUCCESS:
			return { loading: false, error: null, users: action.payload }
		case UserListActionTypes.FETCH_USERS_ERROR:
			return { loading: false, error: action.payload, users: [] }

		default:
			return state
	}
}
