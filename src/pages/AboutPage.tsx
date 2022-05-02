import { Outlet, NavLink } from 'react-router-dom'

const About = () => {
	return (
		<div className='container about-list'>
			<h1>About us</h1>
			<hr />
			<p>This is a demo website about React-router-dom library.</p>
			<ul>
				<li>
					<NavLink to='contacts'>Our Contacts</NavLink>
				</li>
				<li>
					<NavLink to='team'>Our Team</NavLink>
				</li>
			</ul>

			{/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}
			<Outlet />
			<hr />
		</div>
	)
}

export { About }
