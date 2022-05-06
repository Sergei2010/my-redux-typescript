import React, { ReactChildren, ReactChild } from 'react'

import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface AuxProps {
	children: ReactChild | ReactChildren
}

const RequireAuth = ({ children }: AuxProps) => {
	const location = useLocation()
	const { user } = useAuth()
	if (!user) {
		return <Navigate to='/login' state={{ from: location }} />
	}
	return children
}

export { RequireAuth }
