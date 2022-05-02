import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Auth } from './pages/AuthPage'
import { UserList } from './pages/UserListPage'
import { User } from './pages/UserPage'
import { About } from './pages/AboutPage'
import { CreateUser } from './pages/CreatUserPage'
import { EditUserPage } from './pages/EditUserPage'
import { LoginPage } from './pages/LoginPage'
import { NotFound } from './pages/NotfoundPage'
import { Layout } from './components/Layout'
import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Auth />} />
					<Route path='users' element={<UserList />} />
					<Route path='users/:id' element={<User />} />
					<Route path='users/:id/edit' element={<EditUserPage />} />
					<Route
						path='users/new'
						element={
							<RequireAuth>
								<CreateUser />
							</RequireAuth>
						}
					/>
					<Route path='login' element={<LoginPage />} />
					<Route path='about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</AuthProvider>
	)
}

export default App
