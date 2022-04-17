import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../store/action-creators'

// связывает ActionCreators с Dispatch
// вызываем ActionCreators и он сам прокинется в Dispatch
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(ActionCreators, dispatch)
}
