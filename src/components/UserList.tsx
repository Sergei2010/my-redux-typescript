import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
// eslint-disable-next-line
import { fetchUsers } from '../store/action-creators/user'
import { useActions } from '../hooks/useActions'

const UserList: React.FC = () => {
	// за счёт хука useTypedSelector получаю state.user
	const { users, error, loading } = useTypedSelector((state) => state.user)
	const {fetchUsers} = useActions()

	useEffect(() => {
		fetchUsers()
		// eslint-disable-next-line
	}, [])

	if (loading) {
		return <h1>Идет загрузка...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	)
}

export default UserList
