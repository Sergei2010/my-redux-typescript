import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth } from './pages/AuthPage'
import { UserList } from './pages/UserListPage'
import { User } from './pages/UserPage'
import { NotFound } from './pages/NotfoundPage'
import { Layout } from './components/Layout'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Auth />} />
					<Route path='/users' element={<UserList />} />
					<Route path='users/:id' element={<User />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
