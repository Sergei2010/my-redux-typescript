import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { NavLink } from 'react-router-dom'
// import { CustomLink } from '../components/'
// eslint-disable-next-line
import { fetchUsers } from '../store/action-creators/userList'
import { useActions } from '../hooks/useActions'
// import { CustomLink } from '../components/CustomLink'

export interface UsersProps {
	users: any[]
}

export interface UserProps {
	user: object
}

const UserList: React.FC = () => {
	// за счёт хука useTypedSelector получаю state.user
	const { users, error, loading } = useTypedSelector((state) => state.userList)
	const { fetchUsers } = useActions()

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
		<div className='users-list'>
			<h1>Our Users</h1>
			{users.map((user) => (
				<li key={user.id}>
					<NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
				</li>
			))}
		</div>
	)
}

export { UserList }
