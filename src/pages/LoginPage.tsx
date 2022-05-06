import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
// import { IAuth } from '../hoc/AuthProvider'

const LoginPage = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const { signin } = useAuth()

	const fromPage = location.state?.from?.pathname || '/'

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		const form = event.target
		const user = form.username.value

		signin(user, () => navigate(fromPage, { replace: true }))
	}

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name: <input type='text' name='username' placeholder='Name' />
				</label>
				<button type='submit'>Login</button>
			</form>
		</div>
	)
}

export { LoginPage }
