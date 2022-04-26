import { Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'

const Layout = () => {
	return (
		<>
			<header>
				<CustomLink to='/'>Auth</CustomLink>
				<CustomLink to='/users'>UserList</CustomLink>
			</header>
			<Outlet />
		</>
	)
}

export { Layout }
