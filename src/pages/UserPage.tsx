import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export interface UserProps {
	user: object
	username: string
	id: number
	name: string
	company: string
}

const User: React.FC = () => {
	const { id } = useParams()
	const [user, setUser] = useState(null)
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setUser(data))
			.then((data) => console.log(data))
	}, [id])
	return (
		<div className='container'>
			{user && (
				<>
					<h1>Это наш User </h1>
					<p> {'id: ' + Object.values(user)[0]}</p>
					<p> {'name: ' + Object.values(user)[1]}</p>
					<p> {'username: ' + Object.values(user)[2]}</p>
					<p> {'email: ' + Object.values(user)[3]}</p>
					<p>{'address: ' + Object.values(user)[4]}</p>
					<p> {'company: ' + Object.values(user)[5]}</p>
					{console.log('user:', user)}
				</>
			)}
		</div>
	)
}

export { User }
