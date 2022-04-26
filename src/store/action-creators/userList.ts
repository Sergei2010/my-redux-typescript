import { UserListAction, UserListActionTypes } from '../../types/userList'
import { Dispatch } from 'redux'
import axios from 'axios'

// actionCreator для получения данных с сервера
export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserListAction>) => {
		try {
			dispatch({ type: UserListActionTypes.FETCH_USERS })
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			setTimeout(() => {
				dispatch({ type: UserListActionTypes.FETCH_USERS_SUCCESS, payload: response.data })
			}, 500)
		} catch (e) {
			dispatch({
				type: UserListActionTypes.FETCH_USERS_ERROR,
				payload: 'Произошла ошибка при загрузке пользователей',
			})
		}
	}
}
