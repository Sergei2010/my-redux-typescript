import * as UserActionCreators from './user'
import * as UsersActionCreators from './userList'
import * as TodoActionCreators from './todo'

export default {
	...TodoActionCreators,
	...UserActionCreators,
	...UsersActionCreators,
}
