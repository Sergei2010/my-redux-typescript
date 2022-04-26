import { UserAction, UserActionTypes } from '../../types/user'
import { Dispatch } from 'redux'
import axios from 'axios'

// actionCreator для получения данных с сервера
export interface idType {
	id: number
}
export const fetchUser = (id: idType) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER })
			const response = await axios.get(`https://jsonplaceholder.typicode.com/${id}`)
			setTimeout(() => {
				dispatch({ type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data })
			}, 500)
		} catch (e) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: 'Произошла ошибка при загрузке пользователя',
			})
		}
	}
}
