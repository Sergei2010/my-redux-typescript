import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

interface ICreateUser {
	text: string
}

const CreateUser: React.FC<ICreateUser> = ({ text }) => {
	const { signout } = useAuth()
	const navigate = useNavigate()

	return (
		<>
			<h1>{text}</h1>
			<button onClick={() => signout(() => navigate('/', { replace: true }))}>Log Out</button>
		</>
	)
}

export { CreateUser }
