import { NavLink } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='container'>
			<h2>
				<p> This page doesn't exist ...</p>
			</h2>
			<p>
				<NavLink to='/'>Go to home</NavLink>
			</p>
		</div>
	)
}

export { NotFound }
