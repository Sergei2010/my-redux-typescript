import { useState, useEffect } from 'react'
import { useParams, NavLink, useNavigate, useLocation } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid'

interface IGeo {
	lat: string
	lng: string
}
interface IAddress {
	city: string
	geo: IGeo
	street: string
	suite: string
	zipcode: string
}
interface IUser {
	address: IAddress
	company: string
	email: string
	id: number
	name: string
	phone: string
	username: string
	website: string
}

const User: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [user, setUser] = useState({})

	const goBack = () => navigate(-1)
	console.log(useLocation())

	// let keysUser: string[] = Object.keys(user)
	// let valuesUser: (string | object)[] = Object.values(user)
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			// добавляю 'interface IUser" в момент создания объекта "user"
			.then((data: IUser) => {
				setUser(data)
			})
	}, [id])
	return (
		<div className='container'>
			<button onClick={goBack}>Go back</button>
			{user && (
				<div className='user-page'>
					<h1>Это наш User {Object.values(user)[1]}</h1>
					<hr />
					{/* <p> {'name: ' + Object.values(user)[1]}</p> */}
					<ul>
						<li>
							<NavLink to='/'>{'id: ' + Object.values(user)[0]}</NavLink>
						</li>
						<li>
							<NavLink to='/'>{'username: ' + Object.values(user)[2]}</NavLink>
						</li>
						<li>
							<NavLink to='/'>{'email: ' + Object.values(user)[3]}</NavLink>
						</li>
						<li>
							<NavLink to='/'>{'phone: ' + Object.values(user)[5]}</NavLink>
						</li>
						<li>
							<NavLink to='/'>{'website: ' + Object.values(user)[6]}</NavLink>
						</li>
					</ul>
					<hr />
					<NavLink to={`/users/${id}/edit`}>Edit User Page</NavLink>
					{/* 	<p>{'address: ' + Object.values(user)[4]}</p> */}
					{/* 	<p> {'company: ' + Object.values(user)[5]}</p> */}
					{/* 	<ul>
						{keysUser.map((keyUser: string, index: number) => (
							<li key={uuidv4()}>
								<NavLink to='/'>
									{keyUser}:{' '}
									{typeof valuesUser[index] !== 'object'
										? valuesUser[index]
										: 'Hello Sergey'}
								</NavLink>
							</li>
						))}
					</ul> */}
					{/* 	{console.log(Object.keys(user))} */}
					{/* 	{console.log(Object.values(user))} */}
					{/* {console.log(Object.entries(user))} */}
					{/* 	{console.log(user)} */}
				</div>
			)}
		</div>
	)
}

export { User }
