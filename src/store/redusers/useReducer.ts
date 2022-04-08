import { UserState, UserAction, UserActionType } from '../../types/user'

const initialState: UserState = {
	users: [],
	loading: false,
	error: null
}

export const useReduser = (state = initialState, action: UserAction): UserState | undefined => {
	switch (action.type) {
		case UserActionType.FETCH_USERS:
			return { loading: true, error: null, users: [] }
		case UserActionType.FETCH_USERS_SUCCESS:
			return { loading: false, error: null, users: action.payload }
		case UserActionType.FETCH_USERS_ERROR:
			return { loading: false, error: action.payload, users: [] }

		default:
			return state
	}
}