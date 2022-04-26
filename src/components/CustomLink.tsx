import * as React from 'react'
import { Link, useMatch } from 'react-router-dom'
export interface CustomLinkProps {
	to: string
	children: React.ReactNode
}

const CustomLink = ({ children, to, ...props }: CustomLinkProps) => {
	const match = useMatch(to)
	return (
		<Link to={to} {...props} style={{ color: match ? 'var(--color-active)' : 'white' }}>
			{children}
		</Link>
	)
}

export { CustomLink }
